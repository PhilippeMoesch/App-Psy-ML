# Importing necessary libraries

from numpy import float64
import uvicorn
from pydantic import BaseModel
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
from sqlalchemy.orm import Session

#import crud,models,schemas
#from database import SessionLocal, engine

from . import crud
from . import models
from . import schemas

from .database import SessionLocal, engine

from .model.loading import model, model_delay, model_med

models.Base_.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Defining the model input types
class Candidate(BaseModel):
    dropout_ph_ein: float
    h1: float
    h2: float
    h3: float
    h4: float
    h5: float
    h6: float
    h7: float
    h8: float
    h9: float
    h10: float
    h11: float
    h12: float
    dropout_pb_ein: float
    geschl: float
    alter: float
    ort_v_ein: float
    ein_art: float
    einw_inst: float
    zivilstand: float
    besch_teil: float
    besch_voll: float
    besch_nicht: float
    besch_haus: float
    besch_ausb: float
    besch_reha: float
    besch_iv_ahv: float
    besch_gesch: float
    besch_unbek: float
    bildung: float
    ffe: float
    hpt_diagn_num: float
    urgent: float
    F2_scale: float
    home_scale: float
    fm_sum: float

# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to test"}

@app.post("/tests/", response_model=schemas.Test)
def create_user(test: schemas.TestBase, db: Session = Depends(get_db)):
    return crud.create_test(db=db, test=test)

@app.post("/tests/{test_id}/measures/", response_model=schemas.FM)
def  create_fm_for_test(
    test_id: int, fm: schemas.FMBase, db: Session = Depends(get_db)
):
    return crud.create_fm(db=db, fm=fm, test_id=test_id)

@app.get("/measures/", response_model=list[schemas.FM])
def read_fms(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    fms = crud.get_fms(db, skip=skip, limit=limit)
    return fms

@app.get("/tests/", response_model=list[schemas.Test])
def read_tests(skip: int = 0, limit: int=100, db: Session = Depends(get_db)):
    tests = crud.get_tests(db, skip=skip, limit=limit)
    return tests

@app.get("/tests/{test_id}", response_model=schemas.Test)
def read_test(test_id: int, db: Session = Depends(get_db)):
    db_test = crud.get_test(db, test_id=test_id)
    if db_test is None:
        raise HTTPException(status_code=404)
    return db_test

@app.get("/tests/pid/{pid}", response_model=list[schemas.Test])
def read_test_pid(pid: int, db: Session = Depends(get_db)):
    db_test = crud.get_test_pid(db, pid=pid)
    if db_test is None:
        raise HTTPException(status_code=404)
    return db_test

@app.delete("/tests/{test_id}")
def delete_hero(test_id: int, db: Session = Depends(get_db)):
    del_test= db.query(models.Test).filter(models.Test.id == test_id).first()
    db.delete(del_test)
    db.commit()
    return {"ok": True}

# Setting up the prediction route
@app.post("/prediction/")
async def get_predict(data: Candidate):
    sample = np.array([[
        data.dropout_ph_ein,
        data.h1,
        data.h2,
        data.h3,
        data.h4,
        data.h5,
        data.h6,
        data.h7,
        data.h8,
        data.h9,
        data.h10,
        data.h11,
        data.h12,
        data.dropout_pb_ein,
        data.geschl,
        data.alter,
        data.ort_v_ein,
        data.ein_art,
        data.einw_inst,
        data.zivilstand,
        data.besch_teil,
        data.besch_voll,
        data.besch_nicht,
        data.besch_haus,
        data.besch_ausb,
        data.besch_reha,
        data.besch_iv_ahv,
        data.besch_gesch,
        data.besch_unbek,
        data.bildung,
        data.ffe,
        data.hpt_diagn_num,
        data.urgent,
        data.F2_scale,
        data.home_scale,
        data.fm_sum
    ]])
    
    sample = sample.reshape(1, -1)

    pred = model.predict_proba(sample)[0][1]
    pred_med = model_med.predict_proba(sample)[0][1]
    
    day_0 = model_delay.predict_proba(sample)[0][0]
    day_1_end = model_delay.predict_proba(sample)[0][1]
    #day_3_10 = model_delay.predict_proba(sample)[0][3]
    pred_med *= pred
    day_0 *= pred
    day_1_end *= pred
    
    return {
        "data": {
            'prediction': pred,
            'day_0': day_0,
            'day_1_end': day_1_end,
           # 'day_3_10': day_3_10,
            'pred_med': pred_med
        }
    }

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
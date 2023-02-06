from sqlalchemy.orm import Session
from datetime import datetime

from . import models, schemas

def get_test(db: Session, test_id: int):
    return db.query(models.Test).filter(models.Test.id == test_id).first()

def get_test_pid(db: Session, pid: int):
    return db.query(models.Test).filter(models.Test.pid == pid).all()

def create_test(db: Session, test: schemas.TestBase):
    if (test.ffe == 1):
        ffe = "No"
    elif (test.ffe == 2):
        ffe = "Yes"
    else:
        ffe = "Unknown"
    if (test.hpt_diagn_num == 0):
        hpt_diagn_num = "F0"
    elif (test.hpt_diagn_num == 1):
        hpt_diagn_num = "F1"
    elif (test.hpt_diagn_num == 2):
        hpt_diagn_num = "F2"
    elif (test.hpt_diagn_num == 3):
        hpt_diagn_num = "F3"
    elif (test.hpt_diagn_num == 4):
        hpt_diagn_num = "F4"
    elif (test.hpt_diagn_num == 5):
        hpt_diagn_num = "F5"
    elif (test.hpt_diagn_num == 6):
        hpt_diagn_num = "F6"
    elif (test.hpt_diagn_num == 7):
        hpt_diagn_num = "F7"
    elif (test.hpt_diagn_num == 8):
        hpt_diagn_num = "F8"
    elif (test.hpt_diagn_num == 9):
        hpt_diagn_num = "F9"
    elif (test.hpt_diagn_num == 10):
        hpt_diagn_num = "F99"
    else :
        hpt_diagn_num = "Other"
        
    pred = round(test.pred,3)
    delay1 = round(test.day_0,3)
    delay2 = round(test.day_1_end,3)
    pred_med = round(test.pred_med, 3)
    #delay3 = round(test.day_3_10,3)

    #date = datetime.today().strftime('%d-%m-%Y')
    date = datetime.today().strftime('%d-%m:%H')
    db_test = models.Test(ein_dat=test.ein_dat, clinician=test.clinician, dept=test.dept, comment=test.comment, 
                           fm_sum=test.fm_sum, pid=test.pid, date=date, h1=test.h1,  h2=test.h2, h3=test.h3, h4=test.h4, h5=test.h5,
                           h6=test.h6, h7=test.h7, h8=test.h8, h9=test.h9, h10=test.h10, h11=test.h11, h12=test.h12,
                           ffe=ffe, ort_v_ein=test.ort_v_ein, ein_art=test.ein_art, einw_inst=test.einw_inst, dropout_pb_ein=test.dropout_pb_ein,
                           dropout_ph_ein=test.dropout_ph_ein, geschl=test.geschl, alter=test.alter, bildung=test.bildung, zivilstand=test.zivilstand,
                           besch_voll=test.besch_voll, besch_teil=test.besch_teil, besch_reha=test.besch_reha, besch_gesch=test.besch_gesch, 
                           besch_haus=test.besch_haus, besch_iv_ahv=test.besch_iv_ahv, besch_nicht=test.besch_nicht, besch_ausb=test.besch_ausb,
                           besch_unbek=test.besch_unbek, hpt_diagn_num=hpt_diagn_num, home_scale=test.home_scale,
                           F2_scale=test.F2_scale, urgent=test.urgent, pred=pred, day_0=delay1, day_1_end=delay2, pred_med=pred_med)
    db.add(db_test)
    db.commit()
    db.refresh(db_test)
    return db_test

def create_fm(db: Session, fm: schemas.FMBase, test_id: int):
    db_fm = models.FM(measure = fm.measure, occuredOn = fm.occuredOn, owner_id=test_id)
    db.add(db_fm)
    db.commit()
    db.refresh(db_fm)
    return db_fm

def get_fms(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.FM).offset(skip).limit(limit).all()

def get_tests(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Test).offset(skip).limit(limit).all()
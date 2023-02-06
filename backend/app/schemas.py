from pydantic import BaseModel
from typing import Union

class FMBase(BaseModel):
    measure: Union[str, None] = None
    occuredOn: Union[str, None] = None

class FM(FMBase):
    id: int
    owner_id: Union[int, None] = None
    
    class Config:
        orm_mode = True

class TestBase(BaseModel):
    ein_dat: str
    clinician: str
    dept: str
    comment: str
    fm_sum: int
    pid: int
    h1: int
    h2: int
    h3: int
    h4: int
    h5: int
    h6: int
    h7: int
    h8: int
    h9: int 
    h10: int
    h11: int
    h12: int
    ffe: int
    ort_v_ein: int
    ein_art: int
    einw_inst: int
    dropout_pb_ein: int
    dropout_ph_ein: int
    geschl: int
    alter: int
    bildung: int
    zivilstand: int
    besch_voll: bool
    besch_teil: bool
    besch_reha: bool
    besch_gesch: bool
    besch_haus: bool
    besch_iv_ahv: bool
    besch_nicht: bool
    besch_ausb: bool
    besch_unbek: bool
    hpt_diagn_num: int
    home_scale: int
    F2_scale: int
    urgent: int
    pred: float
    day_0: float
    day_1_end: float
    #day_3_10: float
    pred_med: float
    
class Test(TestBase):
    id: int
    date: str
    hpt_diagn_num: str
    ffe: str
    measures: list[FM] = []
    
    class Config:
        orm_mode = True

    
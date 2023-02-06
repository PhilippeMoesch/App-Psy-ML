from email.policy import default
from tkinter import CASCADE #tkinter
from sqlalchemy import Boolean, Column, Text, Integer, Float, String, ForeignKey
from sqlalchemy.orm import relationship
import sys

sys.path.append(".")

from .database import Base_

class Test(Base_):
    __tablename__ = "tests"

    id = Column(Integer, primary_key=True, index=True)
    ein_dat = Column(Text)
    clinician = Column(Text)
    dept = Column(Text)
    comment = Column(Text)
    fm_sum = Column(Integer)
    pid = Column(Integer, index=True)
    date = Column(Text)
    h1 = Column(Integer)
    h2 = Column(Integer)
    h3 = Column(Integer)
    h4 = Column(Integer)
    h5 = Column(Integer)
    h6 = Column(Integer)
    h7 = Column(Integer)
    h8 = Column(Integer)
    h9 = Column(Integer)
    h10 = Column(Integer)
    h11 = Column(Integer)
    h12 = Column(Integer)
    ffe = Column(String(3))
    ort_v_ein = Column(Integer)
    ein_art = Column(Integer)
    einw_inst = Column(Integer)
    dropout_pb_ein = Column(Integer)
    dropout_ph_ein = Column(Integer)
    geschl = Column(Integer)
    alter = Column(Integer)
    bildung = Column(Integer)
    zivilstand = Column(Integer)
    besch_voll = Column(Boolean, default=False)
    besch_teil = Column(Boolean, default=False)
    besch_reha = Column(Boolean, default=False)
    besch_gesch = Column(Boolean, default=False)
    besch_haus = Column(Boolean, default=False)
    besch_iv_ahv = Column(Boolean, default=False)
    besch_nicht = Column(Boolean, default=False)
    besch_ausb = Column(Boolean, default=False)
    besch_unbek = Column(Boolean, default=False)
    hpt_diagn_num = Column(String(2))
    home_scale = Column(Integer)
    F2_scale = Column(Integer)
    urgent = Column(Integer)
    pred = Column(Float)
    day_0 = Column(Float)
    day_1_end = Column(Float)
    #day_3_10 = Column(Float)
    pred_med = Column(Float)
    
    measures = relationship("FM", back_populates="owner", cascade="all, delete")

class FM(Base_):
    __tablename__ = "measures"
    
    id = Column(Integer, primary_key=True, index=True)
    measure = Column(String(15))
    occuredOn = Column(Text)
    owner_id = Column(Integer, ForeignKey("tests.id"))
    
    owner = relationship("Test", back_populates="measures")
    


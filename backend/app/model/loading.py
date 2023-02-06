import joblib

# Loading up the trained model
model = joblib.load('/app/app/model/model_lgbm_180.pkl')
model_delay = joblib.load('/app/app/model/model_lgbm_180_2_delay.pkl')
#model_med = joblib.load('/app/app/model/med_lgbm_180.pkl')
model_med = joblib.load('/app/app/model/model_lgbm_180_med2.pkl')
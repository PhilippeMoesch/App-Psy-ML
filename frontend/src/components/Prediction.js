import { useNavigate } from 'react-router-dom'
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useState, useRef } from 'react'
import axios from 'axios'
import { getBackendUrl } from '../getBackendUrl';
import {useEffect, useContext} from 'react';
import { PidContext} from './contexts/TestContext';
import file from '../assets/surveyDef.js'

function Prediction() {
  StylesManager.applyTheme("defaultV2")
  const [survey, setSurvey] = useState(new Model(file.json))
  const [ein_dat, setEindat] = useState('')
  const [clinician, setClinician] = useState('')
  const [dept, setDept] = useState('')
  const [pid, setPID] = useState('') // -
  const [h1, setH1] = useState(9)
  const [h2, setH2] = useState(9)
  const [h3, setH3] = useState(9)
  const [h4, setH4] = useState(9)
  const [h5, setH5] = useState(9)
  const [h6, setH6] = useState(9)
  const [h7, setH7] = useState(9)
  const [h8, setH8] = useState(9)
  const [h9, setH9] = useState(9)
  const [h10, setH10] = useState(9)
  const [h11, setH11] = useState(9)
  const [h12, setH12] = useState(9)
  const [geschl, setGeschl] = useState('') // -
  const [alter, setAlter] = useState('') // -
  const [bildung, setBildung] = useState(9)
  const [zivilstand, setZivilstand] = useState(9)
  const [besch_voll, setBeschVoll] = useState(0)
  const [besch_teil, setBeschTeil] = useState(0)
  const [besch_reha, setBeschReha] = useState(0)
  const [besch_gesch, setBeschGesch] = useState(0)
  const [besch_haus, setBeschHaus] = useState(0)
  const [besch_iv_ahv, setBeschIV] = useState(0)
  const [besch_nicht, setBeschNicht] = useState(0)
  const [besch_unbek, setBeschUnbek] = useState(0)
  const [besch_ausb, setBeschAusb] = useState(0)
  const [ffe, setFfe] = useState(9)
  const [ort_v_ein, setOrt_v_ein] = useState(12)
  const [ein_art, setEin_art] = useState(9)
  const [einw_inst, setEinw_inst] = useState(9)
  const [dropout_pb_ein, setDropout_pb_ein] = useState(9)
  const [dropout_ph_ein, setDropout_ph_ein] = useState(9)
  const [hpt_diagn_num, setHpt_diagn_num] = useState('') // -
  const [home_scale, setHomeScale] = useState('')
  const [F2_scale, setF2Scale] = useState('')
  const [urgent, setUrgent] = useState('')
  const [comment, setComment] = useState('')
  const [fm_sum, setFMSUM] = useState(0)
  const [pred, setPred] = useState(0.0)
  const [pred_med, setPredMed] = useState(0.0)
  const [day_0, setDay1_2] = useState(0.0)
  const [day_1_end, setDay3_14] = useState(0.0)
  //const [day_3_10, setDay15_] = useState(0.0)

  const {setPid} = useContext(PidContext);
  const [posted, setPosted] = useState()

  const previousValues = useRef({ pred, day_0, day_1_end, pred_med});

  const navigate = useNavigate()
  //survey.completedHtml = "<h3>Prediction: " + String(pred) + "</h3> <br/> <h4> Prediction by delay (admission day not taken into account) </h4> <br/> Day 1 to 2: " + String(day_0) + "<br/> Day 3 to 14 : " + String(day_1_2) + "<br/> Day 15+ : " + String(day_3_10)
  survey.showCompletedPage = false

  const onFinish = () => {
     /* const params = { dropout_ph_ein, h1, h2, h3, h4, h5, h6, h7, h8,
      h9, h10, h11, h12, ffe, ort_v_ein, ein_art, einw_inst,
      dropout_pb_ein, geschl, alter, bildung, 
      zivilstand, besch_voll, besch_teil, besch_reha, besch_gesch,
      besch_haus, besch_iv_ahv, besch_nicht, besch_unbek, besch_ausb,
      hpt_diagn_num,urgent, F2_scale, home_scale}*/

      const params = { dropout_ph_ein, h1, h2, h3, h4, h5,
      h6, h7, h8, h9, h10, h11, h12, dropout_pb_ein, geschl, alter, ort_v_ein, ein_art,
      einw_inst, zivilstand, besch_teil, besch_voll, besch_nicht,
      besch_haus, besch_ausb, besch_reha, besch_iv_ahv, besch_gesch,
      besch_unbek, bildung, ffe, hpt_diagn_num, urgent, F2_scale,
      home_scale, fm_sum }
      console.log(getBackendUrl()+"/prediction/");
      axios.post(getBackendUrl()+"/prediction/", params)
        .then((res) => {
          const data = res.data.data
          setPred(data.prediction)
          setDay1_2(data.day_0)
          setDay3_14(data.day_1_end)
          //setDay15_(data.day_3_10)
          setPredMed(data.pred_med)
          //console.log(data.day_3_10)
        })
        .catch((error) => alert(`Error: ${error.message}`))
  }

 /* const redirect = (e) => {
  
    console.log("THIS IS THE PID THAT WE ARE USING: ", e.valuesHash.pid, typeof e.valuesHash.pid);
    
    setPid(e.valuesHash.pid);
    navigate('/Analytics')
       
  } */

  useEffect(() => {
    if (posted) {
      setPid(pid)
      console.log("HERE, ", posted)
      navigate('/Analytics') }
  }, [posted])

  const params_full = { ein_dat, clinician, dept, comment, fm_sum, pid, h1, h2, h3, h4, h5, h6, h7, h8,
    h9, h10, h11, h12, ffe, ort_v_ein, ein_art, einw_inst,
    dropout_pb_ein, dropout_ph_ein, geschl, alter, bildung, 
    zivilstand, besch_voll, besch_teil, besch_reha, besch_gesch,
    besch_haus, besch_iv_ahv, besch_nicht, besch_unbek, besch_ausb,
    hpt_diagn_num, home_scale, F2_scale, urgent, pred, day_0, day_1_end, pred_med}
  
    useEffect(() => {
    if (
      previousValues.current.pred !== pred &&
      previousValues.current.day_0 !== day_0 &&
      previousValues.current.day_1_end !== day_1_end &&
      //previousValues.current.day_3_10 !== day_3_10 &&
      previousValues.current.pred_med!== pred_med
    ) {
    //if (pred > 0.0) {
      axios
       .post(getBackendUrl()+"/tests/", params_full).then(function (res) {setPosted(res)})
       previousValues.current = { pred, day_0, day_1_end, pred_med };
    } 
  }); 

  const onValueChanging = (sender, options)  => {
    console.log(options)
    var val = options.value
    switch (options.name){
      case "pid":
        setPID(val)
        break;
      case "h1": 
        setH1(val)
        break;
      case "h2": 
        setH2(val)
        break;
      case "h3": 
        setH3(val)
        break;
      case "h4": 
        setH4(val)
        break;
      case "h5": 
        setH5(val)
        break;
      case "h6": 
        setH6(val)
        break;
      case "h7": 
        setH7(val)
        break;
      case "h8": 
        setH8(val)
        break;
      case "h9": 
        setH9(val)
        break;
      case "h10": 
        setH10(val)
        break;
      case "h11": 
        setH11(val)
        break;
      case "h12": 
        setH12(val)
        break;
      case "geschl":
        (val == true) ? setGeschl(2) : setGeschl(1)
        break;
      case "alter":
        setAlter(val)
        break;
      case "bildung":
        setBildung(val)
        break;
      case "zivilstand":
        setZivilstand(val)
        break;
      case "besch":
        if (val.includes(0)) {
          setBeschVoll(1)
        }
        if (val.includes(1)) {
          setBeschTeil(1)
        }
        if (val.includes(2)) {
          setBeschHaus(1)
        }
        if (val.includes(3)) {
          setBeschAusb(1)
        }
        if (val.includes(4)) {
          setBeschReha(1)
        }
        if (val.includes(5)) {
          setBeschGesch(1)
        }
        if (val.includes(6)) {
          setBeschIV(1)
        }
        if (val.includes(7)) {
          setBeschNicht(1)
        }
        if (val.includes(9)) {
          setBeschUnbek(1)
        }
        break;
      case "ffe":
        (val == true) ? setFfe(2) : setFfe(1)
        break;
      case "ort_v_ein":
        setOrt_v_ein(val)
        break;
      case "ein_art":
        setEin_art(val)
        break;
      case "einw_inst":
        setEinw_inst(val)
        break;
      case "hpt_diagn_num":
        setHpt_diagn_num(val)
        break;
      case "dropout_pb_ein":
        setDropout_pb_ein(val)
        break;
      case "dropout_ph_ein":
        setDropout_ph_ein(val)
        break;
      case "home_scale":
        setHomeScale(val)
        break;
      case "F2_scale":
        setF2Scale(val)
        break;
      case "urgent":
        setUrgent(val)
        break;
      case "comment":
        setComment(val)
        break;
      case "clinician":
        setClinician(val)
        break;
      case "fm_sum":
        setFMSUM(val)
        break;
      case "ein_dat":
        setEindat(val)
        break;
      case "department":
        setDept(val)
        break;
      default:
        console.log("no option")
        break 
    }
  }
  //<Survey model={survey} onComplete={redirect} onCompleting={onFinish} onValueChanging={onValueChanging}/>


  return (
    <Survey model={survey} onCompleting={onFinish} onValueChanging={onValueChanging}/>
  );
}

export default Prediction;
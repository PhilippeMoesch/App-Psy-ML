import './Analytics.css'
import './Complete.css'
import "survey-core/survey.css";
import "survey-core/defaultV2.css";
// import 'survey-core/survey.min.css';
import * as SurveyKo from "survey-knockout";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BarChart, AreaChart, Area, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { DashboardGrid } from "./DashboardGrid";
import { Grid, GridColumn} from 'semantic-ui-react'
import { Container } from "@mui/material";
import { PidContext } from './contexts/TestContext';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@popperjs/core";
import '../assets/main.css';
import { getBackendUrl } from '../getBackendUrl';

function Analytics() {
  const [history, setHistory] = useState([])
  const [pid, setPID] = useState(-1);
  const [id, setId] = useState(-1)
  const [testCase, setTestCase] = useState(null)
  const [dataSymptoms, setDataSymptoms] = useState([]);
  const [dataUnknown, setDataUnknown] = useState([]);
  const [days, setDays] = useState([])
  const [nb, setNb] = useState('-');
  const [score, setScore] = useState('-');
  const [date, setDate] = useState('-')
  const [firstfm, setfirstFM] = useState()
  const [med, setMed] = useState()
  const pidContext = useContext(PidContext);

  const set_current_case = (e) => {
    setPID(e.target.value)
  }



  useEffect(() => {
    let data_days = [];
    let n = history.length;
    let med = [];

    if (n === 1) {
      for (let j = 0; j < 3; j++) {
        let dat = j === 1 ? history[0]['date'] : '';
        data_days.push({ date: dat, day_0: history[0]['day_0'], day_1_end: history[0]['day_1_end'] });
        med.push({ date: dat, pred: history[0]['pred'], pred_med: history[0]['pred_med'] });
      }
    }
    else {
      for (let j = 0; j < n; j++) {
        // data_days.push({ date: history[j]['date'], day_0: history[j]['day_0'], day_1_2: history[j]['day_1_2'], day_3_10: history[j]['day_3_10'] });
        data_days.push({ date: history[j]['date'], day_0: history[j]['day_0'], day_1_end: history[j]['day_1_end'] });
        med.push({ date: history[j]['date'], pred: history[j]['pred'], pred_med: history[j]['pred_med'] });

      }
    }
    setDays(data_days)
    setMed(med)

    let total = []
    for (let j = 0; j < n; j++) {
      total = total.concat(history[j]['measures'])
    }

    let smallDate = total.length ? total.reduce(function (a, b) { return parseDate(a.occuredOn) < parseDate(b.occuredOn) ? a : b; }) : '-';
    setfirstFM(parseDate((smallDate.occuredOn)))

  }, [history])



  useEffect(() => {
    if (pidContext.id !== -1 || pidContext.pid !== -1) {
      setPID(pidContext.pid);
      setId(pidContext.id);
      fetchTestById(pidContext.id, pidContext.pid, 1);
    }
  }, [])



  useEffect(() => {
    let data_symptoms = [];
    let data_unknown = [];
    //let med = [];
    if (testCase != null) {
      //med.push(testCase['pred_med'])
      for (let i = 0; i < 12; i++) {
        data_unknown.push({ symptoms: 'h' + (i + 1), status: testCase['h' + (i + 1)] === 9 ? 1 : 0 })
        data_symptoms.push({ symptoms: 'h' + (i + 1), scale: testCase['h' + (i + 1)] === 9 ? 0 : testCase['h' + (i + 1)] });
      }
    }
    setDataUnknown(data_unknown);
    setDataSymptoms(data_symptoms);

    //setMed(med)
  }, [testCase]);

  function parseDate(input) {
    if (input) {
      var parts = input.match(/(\d+)/g);
      // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
      console.log("DATE",parts)
      return new Date(parts[0], parts[1], parts[2]); // months are 0-based
    }
  }

  const fetchTestById = (id, pid, mode) => {
    axios.get(getBackendUrl() + "/tests/pid/" + pid).then(res => res.data).then(
      data => {
        setHistory(data);
        if (mode) updateTestCaseFromBase(data[0]); else {
          axios.get(getBackendUrl() + "/tests/" + id).then(res => res.data).then(
            data => {
              updateTestCaseFromBase(data)
            })
        }
      })
  }


  const updateTestCaseFromBase = (testCase) => {
    setTestCase(testCase)
    setScore(testCase.pred)
    console.log(testCase.date)
    setDate(testCase.date)
  }

  const updateTestCaseFromGraph = (testCase, pid, id) => {
    //setTestCase(testCase);
    fetchTestById(id, pid, 0);
    setScore(testCase.pred)
    setDate(testCase.date)
  }

  let json = {
    "title": "Prediction of Coercive Measures",
    "description": "Early prevention of coercion in adult psychiatry based on machine learning ( Test Version )",
    "logoPosition": "right",
    "showQuestionNumbers": "off",
  }

  SurveyKo.surveyStrings.emptySurvey = ""
  var survey = new SurveyKo.Model(json)
  SurveyKo.StylesManager.applyTheme("defaultV2")
  survey.showNavigationButtons = false;

  function formatYAxis(value) {
    if (value === 1) return "Unknown"
    //if (value === 0) return "Measured"
    return ""
  }

  return (

    <div>
      <br></br>
      <br></br>
      <div class="flex justify-evenly" >
        <input
          style={{ width: "15%" }}
          className="sd-input rounded-lg"
          value={pid}
          onChange={set_current_case}
          placeholder={"Search PID"} />

        <select className='sd-dropdown rounded-lg' placeholder={'test date'} style={{ width: "20%" }} onChange={(e) => { updateTestCaseFromBase(history[e.target.value]); }}>
          {history.map((item, i) => (
            <option key={i} value={i}>{item.date}</option>))
          }
        </select>

        <Button
          variant='success' style={{ width: "15%" }} onClick={() => fetchTestById(id, pid, 1)}>Submit
        </Button>
      </div>
      <br></br>
      <hr></hr>
      {/*
    update the call from TestsGraph to send a pid pred med / pred no med
*/}
      <Container maxWidth="lg" className='glass__form__input'>
        <header className="App-header">

          <br></br>
        </header>
        <DashboardGrid nb={nb} score={score} date={date} firstfm={firstfm} setNb={setNb} updateTestCaseFromGraph={updateTestCaseFromGraph} />
      </Container>
      <br></br><br></br><br></br>
      {testCase && <>
        <Container maxWidth="lg" className='glass__form__input' >
          <Grid columns={2} >
            <Grid.Row >
              <GridColumn>
                <div className="dashboardGrid-chart">
                  HoNOS scales
                  <BarChart
                    width={500}
                    height={300}
                    data={dataSymptoms}
                    margin={{ left: 20 }}
                  >

                    <XAxis dataKey="symptoms" />
                    <YAxis domain={[0, 4]} label={{ value: "Intensity", angle: -90, position: "left" }} interval="preserveStartEnd" />
                    <Tooltip />
                    <Legend />
                    <Bar legendType='none' dataKey="symptoms" fill="#8884d8" />
                    <Bar legendType='none' dataKey="scale" fill="#82ca9d" />
                  </BarChart>
                </div>
              </GridColumn>
              <GridColumn>
                <div className="dashboardGrid-chart">
                  Missing scales
                  <BarChart
                    width={500}
                    height={300}
                    data={dataUnknown}
                    margin={{ left: 20 }}
                  >

                    <XAxis dataKey="symptoms" />
                    <YAxis domain={[0, 1]} label={{ value: "Status", angle: -90, position: "left" }} tickFormatter={formatYAxis} interval="preserveStartEnd" />
                    <Tooltip />
                    <Legend />
                    <Bar legendType='none' dataKey="symptoms" fill="#8884d8" />
                    <Bar legendType='none' dataKey="status" fill="#8f8cda" />
                  </BarChart>
                </div>
              </GridColumn>
            </Grid.Row>

            <Grid.Row >
              <GridColumn>

                {days &&
                  <div className="dashboardGrid-chart">
                    Predict by delay
                    <AreaChart
                      width={500}
                      height={300}
                      data={days}
                      stackOffset="expand"
                      margin={{
                        top: 0,
                        right: 0,
                        left: 20,
                        bottom: 0,
                      }}
                    >

                      <XAxis dataKey="date" ticks={3} />
                      <YAxis domain={[0, 1]} label={{ value: "Comparative risk", angle: -90, position: "left" }} interval="preserveStartEnd" />
                      <Tooltip />
                      <Area type="monotone" dataKey="day_0" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="day_1_end" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                  </div>}
              </GridColumn>
              <GridColumn>
                {med &&
                  <div className="dashboardGrid-chart">
                    Forced Medication
                    <AreaChart
                      width={500}
                      height={300}
                      data={med}
                      stackOffset="expand"
                      margin={{
                        top: 0,
                        right: 0,
                        left: 20,
                        bottom: 0,
                      }}
                    >

                      <XAxis dataKey="date" angle={0} minTick={-1} />
                      <YAxis domain={[0, 1]} label={{ value: "Comparative risk", angle: -90, position: "left" }} interval="preserveStartEnd" />
                      <Tooltip />
                      <Area type="monotone" dataKey="pred_med" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="pred" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                    </AreaChart>
                  </div>}
              </GridColumn>
              <GridColumn>


              </GridColumn>
            </Grid.Row>
          </Grid>
        </Container>
      </>}

    </div>
  )
}
//<Area type="monotone" dataKey="day_3_10" stackId="1" stroke="#ffc658" fill="#ffc658" />

export default Analytics

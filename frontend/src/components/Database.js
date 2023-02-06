import "survey-core/defaultV2.css";
import React, { useContext, useState, useEffect, useMemo } from 'react'
import * as SurveyKo from "survey-knockout";
import axios from 'axios'
import { Survey } from "survey-react-ui";
import TableContainer from "./Table";
import { Container } from 'reactstrap';
import { Navigate, useNavigate } from 'react-router-dom'
import { renderRowSubComponent } from '../helpers/renderRowSubComponent';
import { Popup } from './Popup'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { PidContext, Test } from './contexts/TestContext';
import { faCheckSquare, faTrash, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { getBackendUrl } from '../getBackendUrl';
import '../assets/main.css';
library.add(faCheckSquare, faTrash, faPlus, faArrowRight)


function Database() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const { setPid, setId } = useContext(PidContext);
  //const [FM, setFM] = useState([])

  /* popup */
  const [popup, setPopup] = useState(false)
  const [ID, SetID] = useState(0)

  const navigate = useNavigate()

  // useMemo useCallback 
  useEffect(() => {
    console.log(getBackendUrl()+"/tests/");
    (async () => {
      const result = await axios(getBackendUrl()+"/tests/");
      /*console.log(result.data)*/
      console.log(result.data.date)
      setData(result.data);
      setRefresh(false)
    })();
  }, [refresh]);

  function getTime(time, addHour) {
    let [h, m] = time.split(':');
    let date = new Date();
     date.setHours(h, m, 0)
     date.toString();
    let res = `${date.getHours()+addHour}:${date.getMinutes()}`
    return res
   }



  const checkrisk = (pid, id) => {
    setPid(pid)
    setId(id)
    navigate('/Analytics')
  }


  const handleDelete = (row) => {
    const id = String(row['id'])
    console.log(refresh)
    axios
      .delete(getBackendUrl()+"/tests/" + id)
      .then((res) => {
        setRefresh(true)
      })
      .catch((error) => alert(`Error: ${error.message}`))
    console.log(refresh)
  }

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: 'expander', // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
      /* {
         Header: 'Pos.',
         Cell: ({row}) => (
   
           (row.original.measures.length > 0) ? '🔵' : ' '
         )
         
       },*/
      {
        Header: "Patient",
        // First group columns
        columns: [
          {
            Header: "ID",
            accessor: "pid",
            className: 'firstColumn',
            disableSortBy: true
          },
          {
            Header: "ICD",
            accessor: "hpt_diagn_num",
            disableSortBy: true
          },
          {
            Header: "Admission date",
            accessor: "ein_dat",
            disableSortBy: true
          }
          /*  {
              Header: "Date",
              accessor: "date",
              disableSortBy: false
            } */
        ]
      },
      {
        Header: "Predictions",
        // First group columns
        columns: [
          {
            Header: "Risk",
            accessor: "pred",
            disableSortBy: false
          },
          {
            Header: "Forced meds",
            accessor: "pred_med",
            disableSortBy: false
          },
          {
            Header: "Day 0",
            accessor: "day_0",
            disableSortBy: true
          },
          {
            Header: "Day 1+",
            accessor: "day_1_end",
            disableSortBy: true
          }
        ]
      },
      {
        // Second group - Details
        Header: "Data entered by/from",
        // Second group columns
        columns: [
          {
            Header: "Author",
            accessor: "clinician",
            headerClassName: 'headerTable',
            disableSortBy: false
          },
          {
            Header: "Department",
            accessor: "dept",
            headerClassName: 'headerTable',
            disableSortBy: false
          },
        ]
      },

      {
        Header: "Test details ",
        // Second group columns
        columns: [
          {
            Header: 'Test date', /* add a measure */
            accessor: "date",
            disableSortBy: false
          },
          {
            Header: ' ', /* add a measure */
            Cell: ({ row }) => (
              <div>
                <IconButton onClick={() => { setPopup(true); SetID(row.original.id); }}>
                  <FontAwesomeIcon icon={["fas", "plus"]} fontSize={15} />
                </IconButton>
              </div>
            )
          },
          {
            Header: '  ',
            Cell: ({ row }) => (
              <div>
                <IconButton onClick={() => handleDelete(row.original)}>
                  <FontAwesomeIcon icon={["fas", "trash"]} fontSize={15} />
                </IconButton>
              </div>
            )
          },
          {
            Header: '   ',
            Cell: ({ row }) => (
              <div>
                <IconButton onClick={() => checkrisk(row.original.pid, row.original.id)}>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" fontSize={15} />
                </IconButton>
              </div>
            )
          },
        ]
      },
    ],
    []
  );
  var json = {
    "title": "Prediction of Coercive Measures",
    "description": "Early prevention of coercion in adult psychiatry based on machine learning ( Test Version )",
    "logoPosition": "right",
    "showQuestionNumbers": "off"
  }

  SurveyKo.surveyStrings.emptySurvey = ""
  const survey = new SurveyKo.Model(json)
  SurveyKo.StylesManager.applyTheme("defaultV2")
  survey.showNavigationButtons = false;

  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        <Popup id={ID} open={popup} setOpen={setPopup}></Popup>
        <TableContainer columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
      </Container>
    </div>
  )
}
export default Database;

/*<button onClick={() => handleDelete(row.original)}>Delete</button>
  <button onClick={() => {setPopup(true); SetID(row.original.id);}}>Confirm</button>
  <Survey model={survey} />
*/

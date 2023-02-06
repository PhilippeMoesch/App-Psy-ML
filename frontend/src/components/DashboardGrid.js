import { Card, Statistic } from "semantic-ui-react";
import { TestsGraph } from '../graphs/TestsGraph';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { getBackendUrl } from '../getBackendUrl';


import "./DashboardGrid.css";


export const DashboardGrid = params => {
  const [data, setData] = useState([]);

  console.log(typeof params.date, params.date);

  const DASHBOARD_BOXES = [
    {
      title: "Total Tests",
      className: "green",
      value: params.nb
    },
    {
      title: "Current Score",
      className: "purple",
      value: params.score
    },
    {
      title: "Test date",
      value: params.date.slice(0,5)
    },
    {
      title: "First Measure",
      value: params.firstfm && (params.firstfm.getUTCDate()) + "-" + ('0' + (params.firstfm.getMonth()+1)).slice(-2) 
    },
  ];


  useEffect(() => {
    (async () => {
      const result = await axios(getBackendUrl()+"/tests/");
      const sortedData = result.data.sort((a, b) => b.pred - a.pred);
      params.setNb(sortedData.length)
      setData(sortedData);
    })();
  }, [params]);

  return (
    <div className="dashboardGrid">
      <div className="dashboardGrid-boxes">
        {DASHBOARD_BOXES.map((box, i) => (
          <Card className="dashboardGrid-boxes-item" centered raised key={i}>
            <Statistic
              className={box.className ? box.className : ""}
              as="h4"
              label={box.title}
              value={box.value ? box.value : "-"}
            />
          </Card>
        ))}
      </div>
      <div>
        <div className="dashboardGrid-chart">
          Ranking of tests
          <TestsGraph tests={data} setTestCase={params.updateTestCaseFromGraph} />
        </div>
      </div>
    </div>
  );
}

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useState} from 'react';
import "../components/DashboardGrid.css";

export function TestsGraph({tests, setTestCase}) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (data, index) => {
        setActiveIndex(index);
        setTestCase(data, data.pid, data.id);
    }

    return ( // JSX  
        <>
            {tests && 
                <BarChart
                    width={700}
                    height={250}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    data={tests}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="pid" angle={45} />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Legend />
                    <Bar legendType='none' dataKey="pred" fill="#82ca9d" onClick={handleClick} >
                    {tests.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#8884d8' : '#82ca9d'} key={`cell-${index}`} />
              ))}
                    </Bar>

                </BarChart>
           
            }
        </>
    )

}
import React, {useState,useEffect} from 'react';
import { Line, Bar,Pie } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { fetchDailyData } from '../../api';


const Chart = ({ data: {confirmed,recovered,deaths},country,checked}) => {
    const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    }
    fetchAPI();
  }, []);

  // const months = dailyData.map(({ date }) => date);
  // console.log(months);
  
  const monthlyLineChart = (
    <div>
      <h1>Monthly Line Chart</h1>
    </div>
  );

   const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );


  const barChart = (
    confirmed ? (
      <Bar style={{height:"30vh"}}
        data={{
          labels: ["Infected", "Recovered" ,"Deaths"],
          datasets:[{
            label: "People",
            backgroundColor: [
              'rgba(255, 0, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 0,255, 0.5)'
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current situation in ${country}` },
          maintainAspectRatio:false,
        }}
      />
    ):
      null
  );

  const pieChart = (
    confirmed ? (
      <Pie 
        data={{
          labels: ["Infected", "Recovered" ,"Deaths"],
          datasets:[{
            label: "People",
            backgroundColor: [
              'rgba(255, 0, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 0,255, 0.5)'
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current situation in ${country}` },
          maintainAspectRatio:false,
        }}
      />
    ):
      null
  );

    return (
      <div className={styles.container}>
        {country ?
        <>
          <div className={styles.bar}>
            {barChart}
          </div>
          <div className={styles.pie}>
            {pieChart}
          </div>
        </>
        : (checked ? monthlyLineChart : lineChart)}</div>
    );
}

export default Chart;
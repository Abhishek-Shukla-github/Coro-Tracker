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

  const months = {};
  const monthArr = [];
  const totalConfirmed = [];
  const totalDeaths = [];
  const totalRecovered = [];
  const monthlyCalculation = () => {
    let confirmed1 = 0; let recovered1 = 0;let deaths1 = 0;
    let confirmed2 = 0; let recovered2 = 0;let deaths2 = 0;
    let confirmed3 = 0; let recovered3 = 0;let deaths3 = 0;
    let confirmed4 = 0; let recovered4 = 0;let deaths4 = 0;
    let confirmed5 = 0; let recovered5 = 0;let deaths5 = 0;
    let confirmed6 = 0; let recovered6 = 0;let deaths6 = 0;
    let confirmed7 = 0; let recovered7 = 0;let deaths7 = 0;
    let confirmed8 = 0; let recovered8 = 0;let deaths8 = 0;
    let confirmed9 = 0; let recovered9 = 0;let deaths9 = 0;
    let confirmed10 = 0; let recovered10 = 0;let deaths10 = 0;
    let confirmed11 = 0; let recovered11 = 0;let deaths11 = 0;
    let confirmed12 = 0; let recovered12 = 0;let deaths12 = 0;
    //console.log(confirmed1);
    const calculations = dailyData.map((day) => {
      let month = day.date.split("-");
      switch (month[1]) {
        case "01":
          if (day.deaths === null) {
            months.january = [confirmed1 + day.confirmed, deaths1 + 0, recovered1 + 0];
          }
          if (day.recovered === null) {
            months.january = [confirmed1 + day.confirmed, deaths1 + day.deaths, recovered1 + 0];
          }
          else months.january = [confirmed1 + day.confirmed, deaths1 + day.deaths, recovered1 + day.recovered];
          break;
        
        case "02":
          if (day.deaths === null) {
            months.february = [confirmed2 + day.confirmed, deaths2 + 0, recovered2 + 0];
          }
          if (day.recovered === null) {
            months.february = [confirmed2 + day.confirmed, deaths2 + day.deaths, recovered2 + 0];
          }
          else months.february = [confirmed2 + day.confirmed, deaths2 + day.deaths, recovered2 + day.recovered];
          break;
        
        case "03":
          if (day.deaths === null) {
            months.march = [confirmed3 + day.confirmed, deaths3 + 0, recovered3 + 0];
          }
          if (day.recovered === null) {
            months.march = [confirmed3 + day.confirmed, deaths3 + day.deaths, recovered3 + 0];
          }
          else months.march = [confirmed3 + day.confirmed, deaths3 + day.deaths, recovered3 + day.recovered];
          break;
        
        case "04":
          if (day.deaths === null) {
            months.april = [confirmed4 + day.confirmed, deaths4 + 0, recovered4 + 0];
          }
          if (day.recovered === null) {
            months.april = [confirmed4 + day.confirmed, deaths4 + day.deaths, recovered4 + 0];
          }
          else months.april = [confirmed4 + day.confirmed, deaths4 + day.deaths, recovered4 + day.recovered];
          break;
        
        case "05":
          if (day.deaths === null) {
            months.may = [confirmed5 + day.confirmed, deaths5 + 0, recovered5 + 0];
          }
          if (day.recovered === null) {
            months.may = [confirmed5 + day.confirmed, deaths5 + day.deaths, recovered5 + 0];
          }
          else months.may = [confirmed5 + day.confirmed, deaths5 + day.deaths, recovered5 + day.recovered];
          break;
        
        case "06":
          if (day.deaths === null) {
            months.june = [confirmed6 + day.confirmed, deaths6 + 0, recovered6 + 0];
          }
          if (day.recovered === null) {
            months.june = [confirmed6 + day.confirmed, deaths6 + day.deaths, recovered6 + 0];
          }
          else months.june = [confirmed6 + day.confirmed, deaths6 + day.deaths, recovered6 + day.recovered];
          break;

        case "07":
          if (day.deaths === null) {
            months.july = [confirmed7 + day.confirmed, deaths7 + 0, recovered7 + 0];
          }
          if (day.recovered === null) {
            months.july = [confirmed7 + day.confirmed, deaths7 + day.deaths, recovered7 + 0];
          }
          else months.july = [confirmed7 + day.confirmed, deaths7 + day.deaths, recovered7 + day.recovered];
          break;
        
        case "08":
          if (day.deaths === null) {
            months.august = [confirmed8 + day.confirmed, deaths8 + 0, recovered8 + 0];
          }
          if (day.recovered === null) {
            months.august = [confirmed8 + day.confirmed, deaths8 + day.deaths, recovered8 + 0];
          }
          else months.august = [confirmed8 + day.confirmed, deaths8 + day.deaths, recovered8 + day.recovered];
          break;
        
        case "09":
          if (day.deaths === null) {
            months.september = [confirmed9 + day.confirmed, deaths9 + 0, recovered9 + 0];
          }
          if (day.recovered === null) {
            months.september = [confirmed9 + day.confirmed, deaths9 + day.deaths, recovered9 + 0];
          }
          else months.september = [confirmed9 + day.confirmed, deaths9 + day.deaths, recovered9 + day.recovered];
          break;

        case "10":
          if (day.deaths === null) {
            months.october = [confirmed10 + day.confirmed, deaths10 + 0, recovered10 + 0];
          }
          if (day.recovered === null) {
            months.october = [confirmed10 + day.confirmed, deaths10 + day.deaths, recovered10 + 0];
          }
          else months.october = [confirmed10 + day.confirmed, deaths10 + day.deaths, recovered10 + day.recovered];
          break;

        case "11":
          if (day.deaths === null) {
            months.november = [confirmed11 + day.confirmed, deaths11 + 0, recovered11 + 0];
          }
          if (day.recovered === null) {
            months.november = [confirmed11 + day.confirmed, deaths11 + day.deaths, recovered11 + 0];
          }
          else months.november = [confirmed11 + day.confirmed, deaths11 + day.deaths, recovered11 + day.recovered];
          break;

        case "12":
          if (day.deaths === null) {
            months.december = [confirmed12 + day.confirmed, deaths12 + 0, recovered12 + 0];
          }
          if (day.recovered === null) {
            months.december = [confirmed12 + day.confirmed, deaths12 + day.deaths, recovered12 + 0];
          }
          else months.december = [confirmed12 + day.confirmed, deaths12 + day.deaths, recovered12 + day.recovered];
          break;
      }
      })
  }
  monthlyCalculation();
  console.log(months);
  //Getting months in an array for labels
  for (let month in months) { 
    monthArr.push(month);
  }

  //Getting confirmed cases of all months as an array
  for (const [key, value] of Object.entries(months)) {
    totalConfirmed.push(value[0]);
  }
  //Getting deaths cases of all months as an array
  for (const [key, value] of Object.entries(months)) {
    totalDeaths.push(value[1]);
  }
  //Getting recovered cases of all months as an array
  for (const [key, value] of Object.entries(months)) {
    totalRecovered.push(value[2]);
  }

  const monthlyLineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: monthArr,
          datasets: [{
            data: totalConfirmed,
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: totalDeaths,
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }, {
            data: totalRecovered,
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          }],
        }}
        options={{
          responsive:true,
          pan: {
              enabled: true,
              mode: "xy",
              speed: 1,
              threshold: 1,
            },
            zoom: {
              enabled: true,
              drag: false,
              mode: "xy",
              limits: {
                max: 1,
                min: 0.5,
              },
              rangeMin: {
                x: 2,
                y: 1,
              },
              rangeMax: {
                x: 10,
                y: 150,
              },
            },
        }}
      />
    ): null
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
          maintainAspectRatio: false,
          responsive:true,
          pan: {
              enabled: true,
              mode: "xy",
              speed: 1,
              threshold: 1,
            },
            zoom: {
              enabled: true,
              drag: false,
              mode: "xy",
              limits: {
                max: 1,
                min: 0.5,
              },
              rangeMin: {
                x: 2,
                y: 1,
              },
              rangeMax: {
                x: 10,
                y: 150,
              },
            },
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
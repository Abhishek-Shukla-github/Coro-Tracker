import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component{
    state = {
        data: {},
        country: "",
        checked:false
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    handleChecked = (prevChecked) => {
        this.setState({checked:!prevChecked})
    }

    handleCountryChange = async (country)=>{
        //fetch the data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        //set the state
            this.setState({data:fetchedData,country:country});
    }

    render() {
        const { data,country,checked } = this.state;
        return (
            <div className={styles.container}>
                <img alt="Covid" src="https://image.similarpng.com/very-thumbnail/2020/08/Cartoon-characters-sad-emojis-coronavirus-microbes-covid-19-on-transparent-background-PNG.png" style={{height:"25vh",width:"auto",backgroundColor:"white"}} />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} country={country} checked={checked} handleChecked={this.handleChecked}/>
                <Chart data={data} country={country} checked={checked}/>
            </div>
        )
    }
}
export default App;
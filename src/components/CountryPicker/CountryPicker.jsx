import React, { useEffect,useState} from 'react';
import { NativeSelect, FormControl,FormControlLabel,Checkbox } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({handleCountryChange,handleChecked,checked,country}) => {
    const [ fetchedCountry, setFetchedCountry ] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            const countryResponse = await fetchCountries();
            setFetchedCountry(countryResponse);
        }
        fetchAPI();
    },[setFetchedCountry])
    return ( 
        <FormControl className={styles.formControl} >
            <NativeSelect defaultValue="" style={{color:"#85625f"}} onChange={(e)=>handleCountryChange(e.target.value)}>
                <option key="Global" value="">Global</option>
                {fetchedCountry.map((country) => {
                    return <option key={country} value={country}>{country}</option>
                })}
            </NativeSelect>
            {!country ? <FormControlLabel style={{ alignSelf: "center" }}
                control={<Checkbox name="checkedA" style={{padding:"20px"}} onChange={() => { handleChecked(checked) }} />}
                label="Monthly data"
            /> : null}
        </FormControl>
    )
}

export default CountryPicker;
import React, { useEffect,useState} from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";


const CountryPicker = ({handleCountryChange}) => {
    const [ fetchedCountry, setFetchedCountry ] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            const countryResponse = await fetchCountries();
            setFetchedCountry(countryResponse);
        }
        fetchAPI();
    },[setFetchedCountry])
    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                {fetchedCountry.map((country) => {
                    return <option key={country} value={country}>{country}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
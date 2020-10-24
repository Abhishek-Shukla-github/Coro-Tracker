import React from 'react';
import { Grid, CardContent, Typography, Card } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: {confirmed,deaths,recovered,lastUpdate}}) => {
    if (!confirmed) return <h1>Loading....</h1>
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator={","} />
                        </Typography>
                    <Typography color="textSecondary">Real Date</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary">Real Date</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Death</Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary">Real Date</Typography>
                    <Typography variant="body2">Number of deaths due to COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    );
}

export default Cards;
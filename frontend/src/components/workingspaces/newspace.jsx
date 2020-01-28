import React, {Component} from 'react'
// import {Grid, Grid, Button, Form, FormControl, Typography, TextField, Slider} from 'reactstrap'
import { makeStyles, FormControl, FormGroup, Typography, Slider, Grid, TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik'
import axios from 'axios'

const NewSpace = () => {

    
    const formik = useFormik({
        initialValues: { name: '', country: '', city: '', address: '',privacy: 3, noise: 3, popularity: 3, security: 3, wifiSpeed: 3},
        onSubmit: values => { axios.post('http://localhost:8080/workingspace', { values }) }
    })
    

    const marks = [
        {
            value: 1,
            label: 'low',
        },
        {
            value: 5,
            label: 'high'
        }
    ];

    function valuetext(value) {
        return `${value}`;
    }



    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
                <Grid item xs={3}>

                    <Typography for='name'>Name</Typography>
                    <TextField type='text' id='name' name='name' placeholder='Starbucks' value={formik.values.name} onChange={formik.handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography for='country'>Country</Typography>
                    <TextField type='text' id='country' name='country' placeholder='Canada' value={formik.values.country} onChange={formik.handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography for='city'>City</Typography>
                    <TextField type='text' id='city' name='city' placeholder='Vancouver' value={formik.values.city} onChange={formik.handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography for='address'>Address</Typography>
                    <TextField type='text' id='address' name='address' placeholder='1030 W Georgia St' value={formik.values.address} onChange={formik.handleChange} />

                </Grid>

            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Typography id="privacy">Privacy</Typography>
                    <Slider name="privacy" step={1} marks={marks} min={1} max={5} onChange={formik.handleChange} valueLabelDisplay="auto" defaultValue={3} value={formik.values.privacy}/>

                </Grid>

                <Grid item xs={4}>

                    <Typography>Noise</Typography>
                    <Slider name='noise' getAriaValueText={valuetext} step={1} marks={marks} min={1} max={5}  onChange={formik.handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={4}>

                    <Typography>Popularity</Typography>
                    <Slider name='popularity' getAriaValueText={valuetext} step={1}  marks={marks} min={1} max={5} onChange={formik.handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={6}>

                    <Typography>Security</Typography>
                    <Slider name='security' getAriaValueText={valuetext} step={1}  marks={marks} min={1} max={5} v onChange={formik.handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={6}>

                    <Typography>Wifi Speed</Typography>
                    <Slider name='wifiSpeed' getAriaValueText={valuetext} step={1}  marks={marks} min={1} max={5} onChange={formik.handleChange} valueLabelDisplay="auto"/>

                </Grid>

            </Grid>


            <Button type='submit'>Submit</Button>
        </form>
    )

}

export default NewSpace
import React, { useState } from 'react'
import { Typography, Slider, Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios'

function NewSpace(props) {
    const [form, setForm] = useState({
        name: '',
        country: '',
        city: '',
        address: '',
        privacy: 3,
        noise: 3,
        popularity: 3,
        security: 3,
        wifiSpeed: 3
    })
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/workingspace', form)
        .then(props.showNewSpace())
    }
    
    const handleChange = (e, value) => {
        const fieldValue = (e.target.type !== 'text' ? value : e.target.value)
            setForm({
                ...form,
                [e.target.id] : fieldValue
            })
    }

        
            const marks = [
                {
                    value: 1,
                    label: '1',
                },
                {
                    value: 2,
                    label: '2',
                },
                {
                    value: 3,
                    label: '3',
                },
                {
                    value: 4,
                    label: '4',
                },
                {
                    value: 5,
                    label: '5'
                }
            ];

    return(
        <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
                <Grid item xs={3}>

                    <Typography>Name</Typography>
                    <TextField type='text' id='name' name='name' placeholder='Starbucks' onChange={handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography>Country</Typography>
                    <TextField type='text' id='country' name='country' placeholder='Canada' onChange={handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography>City</Typography>
                    <TextField type='text' id='city' name='city' placeholder='Vancouver' onChange={handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography>Address</Typography>
                    <TextField type='text' id='address' name='address' placeholder='1030 W Georgia St' onChange={handleChange} />

                </Grid>

            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Typography>Privacy</Typography>
                    <Slider id='privacy' value={form.privacy} step={1} marks={marks} min={1} max={5} onChange={handleChange} valueLabelDisplay="auto" />

                </Grid>

                <Grid item xs={4}>

                    <Typography>Noise</Typography>
                    <Slider id='noise' value={form.noise} step={1} marks={marks} min={1} max={5}  onChange={handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={4}>

                    <Typography>Popularity</Typography>
                    <Slider id='popularity' value={form.popularity} step={1}  marks={marks} min={1} max={5} onChange={handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={6}>

                    <Typography>Security</Typography>
                    <Slider id='security' value={form.security} step={1}  marks={marks} min={1} max={5} onChange={handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={6}>

                    <Typography>Wifi Speed</Typography>
                    <Slider id='wifiSpeed' value={form.wifiSpeed} step={1}  marks={marks} min={1} max={5} onChange={handleChange} valueLabelDisplay="auto"/>

                </Grid>

            </Grid>
                {console.log(props)}
            <Button onClick={() => props.showNewSpace()}>Hide</Button> <Button type='submit'>Submit</Button>
        </form>
    )
}

export default NewSpace
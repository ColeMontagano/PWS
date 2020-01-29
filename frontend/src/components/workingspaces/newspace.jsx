import React, {Component} from 'react'
import { Typography, Slider, Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios'

class NewSpace extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            country: '',
            city: '',
            address: '',
            privacy: 3,
            noise: 3,
            popularity: 3,
            security: 3,
            wifiSpeed: 3
        }
    }

    
    handleSubmit = (e) => {
        axios.post('http://localhost:8080/workingspace', this.state)
        e.preventDefault()
    }
    
    
    render() {
        this.handleChange = (e, value) => {
            const fieldValue = (e.target.type !== 'text' ? value : e.target.value)
         this.setState({
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
        
            function valuetext(value) {
                return `${value}`;
            }

    return(
        <form onSubmit={this.handleSubmit}>
            <Grid container spacing={4}>
                <Grid item xs={3}>

                    <Typography for='name'>Name</Typography>
                    <TextField type='text' id='name' name='name' placeholder='Starbucks' onChange={this.handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography for='country'>Country</Typography>
                    <TextField type='text' id='country' name='country' placeholder='Canada' onChange={this.handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography for='city'>City</Typography>
                    <TextField type='text' id='city' name='city' placeholder='Vancouver' onChange={this.handleChange} />

                </Grid>
                <Grid item xs={3}>

                    <Typography for='address'>Address</Typography>
                    <TextField type='text' id='address' name='address' placeholder='1030 W Georgia St' onChange={this.handleChange} />

                </Grid>

            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Typography >Privacy</Typography>
                    <Slider id='privacy' value={this.state.privacy} step={1} marks={marks} min={1} max={5} onChange={this.handleChange} valueLabelDisplay="auto" />

                </Grid>

                <Grid item xs={4}>

                    <Typography>Noise</Typography>
                    <Slider id='noise' value={this.state.noise} step={1} marks={marks} min={1} max={5}  onChange={this.handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={4}>

                    <Typography>Popularity</Typography>
                    <Slider id='popularity' value={this.state.popularity} step={1}  marks={marks} min={1} max={5} onChange={this.handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={6}>

                    <Typography>Security</Typography>
                    <Slider id='security' value={this.state.security} step={1}  marks={marks} min={1} max={5} onChange={this.handleChange} valueLabelDisplay="auto"/>

                </Grid>
                <Grid item xs={6}>

                    <Typography>Wifi Speed</Typography>
                    <Slider id='wifiSpeed' value={this.state.wifiSpeed} step={1}  marks={marks} min={1} max={5} onChange={this.handleChange} valueLabelDisplay="auto"/>

                </Grid>

            </Grid>


            <Button type='submit'>Submit</Button>
        </form>
    )
}
}

export default NewSpace
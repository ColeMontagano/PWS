import React from 'react'
import {Col, Row, Button, Form, FormGroup, Label, Input, CustomInput} from 'reactstrap'
import {useFormik} from 'formik'

const NewSpace = () =>  {


const formik = useFormik({
    initialValues : { name : '', country : '', city : '', address : '', privacy : 3, noise : 3, popularity : 3, security : 3, wifiSpeed : 3},
    onSubmit: values => {console.log(values)}
})


        return(
            <div>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' id='name' name='name' placeholder='Starbucks' value={formik.values.name} onChange={formik.handleChange}/>
                </FormGroup>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='country'>Country</Label>
                            <Input type='text' id='country' name='country' placeholder='Canada' value={formik.values.country} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='city'>City</Label>
                            <Input type='text' id='city' name='city' placeholder='Vancouver' value={formik.values.city} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='address'>Address</Label>
                            <Input type='text' id='address' name='address' placeholder='1030 W Georgia St' value={formik.values.address} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Privacy</Label>
                            <CustomInput type='range' name='privacy' id='privacy' min='1' max='5' value={formik.values.privacy} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Noise</Label>
                            <CustomInput type='range' name='noise' id='noise' min='1' max='5' default='1' value={formik.values.noise} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Popularity</Label>
                            <CustomInput type='range' name='popularity' id='popularity' min='1' max='5' value={formik.values.popularity} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Security</Label>
                            <CustomInput type='range' name='security' id='security' min='1' max='5' value={formik.values.security} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Wifi Speed</Label>
                            <CustomInput type='range' name='wifiSpeed' id='wifiSpeed' min='1' max='5' value={formik.values.wifiSpeed} onChange={formik.handleChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type='submit'>Submit</Button>
            </Form>
         </div>
        )
    
}

export default NewSpace
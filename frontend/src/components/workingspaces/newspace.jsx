import React, {Component} from 'react'
import {Col, Row, Button, Form, FormGroup, Label, Input, CustomInput} from 'reactstrap'

class NewSpace extends Component {
    render() {

        const submitForm = () => {

        }
        return(
            <div>
            <Form>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' name='name' placeholder='Starbucks'/>
                </FormGroup>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='country'>Country</Label>
                            <Input type='text' name='country' placeholder='Canada'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='city'>City</Label>
                            <Input type='text' name='city' placeholder='Vancouver'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='address'>Address</Label>
                            <Input type='text' name='address' placeholder='1030 W Georgia St'/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Privacy</Label>
                            <CustomInput type='range' id='privacy' min='1' max='5'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Noise</Label>
                            <CustomInput type='range' id='noise' min='1' max='5' default='1'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Popularity</Label>
                            <CustomInput type='range' id='popularity' min='1' max='5'/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Security</Label>
                            <CustomInput type='range' id='security' min='1' max='5'/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Wifi Speed</Label>
                            <CustomInput type='range' id='wifiSpeed' min='1' max='5' />
                        </FormGroup>
                    </Col>
                </Row>
                <Button onSubmit={submitForm}>Submit</Button>
            </Form>
            </div>
        )
    }
}

export default NewSpace
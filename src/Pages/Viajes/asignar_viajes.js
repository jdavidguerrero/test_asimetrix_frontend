import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';

import Aux from "../../hoc/_Aux";
import AnimatedModal from "../../App/components/AnimatedModal";

class MaskWithValidation extends BaseFormControl {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    getInputRef(){
        return this.inputRef.current.inputElement;
    }

    handleChange = (e) => {
        this.checkError();
        if(this.props.onChange) this.props.onChange(e);
    };

    render () {
        return (
            <React.Fragment>
                <MaskedInput ref={this.inputRef} {...this.filterProps()} onChange={this.handleChange}/>
                { this.displayErrorMessage() }
                { this.displaySuccessMessage() }
            </React.Fragment>
        )
    }
}

class FormsValidation extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone:"",
        description: "",
        basic: "",
        custom: "",
        chkBasic: false,
        chkCustom: false,
        checkMeSwitch: false,
        showModal: false
    };

    handleCheckboxChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        //alert(JSON.stringify(formData, null, 2));
        this.setState({ showModal: true });
    };

    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    matchPassword = (value) => {
        return value && value === this.state.password;
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Asignar Viaje Manual</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            
                                <Form>
                                <Form.Row>
                                            <Form.Group as={Col} md="6">
                                                <Form.Label>Usuario</Form.Label>
                                                <Form.Control as="select" className="mb-3">
                                                            <option>Default select</option>
                                                            <option>Usuario 1</option>
                                                            <option>Usuario 2</option>
                                                            <option>Usuario 3</option>
                                                                                                                                  <option>Usuario 4</option>
                                                            <option>Usuario 5</option>
                                        </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6">
                                                <Form.Label>Conductor</Form.Label>
                                                <Form.Control as="select" className="mb-3">
                                                            <option>Default select</option>
                                                            <option>Conductor 1</option>
                                                            <option>Conductor 2</option>
                                                            <option>Conductor 3</option>
                                                            <option>Conductor 4</option>
                                                            <option>Conductor 5</option>
                                        </Form.Control>
                                            </Form.Group>
                                </Form.Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
            </Aux>
        );
    }
}

export default FormsValidation;
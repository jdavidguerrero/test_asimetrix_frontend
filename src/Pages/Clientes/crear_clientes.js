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
                                <Card.Title as="h5">Ingreso  cliente</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                <Form.Row>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label>Nombre</Form.Label>
                                                <Form.Control type="text" placeholder="Nombre Cliente" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label>Direccion</Form.Label>
                                                <Form.Control type="text" placeholder="Direccion Cliente" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label>NIT</Form.Label>
                                                <Form.Control type="text" placeholder="NIT Cliente" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label>Nombre Contacto</Form.Label>
                                                <Form.Control type="text" placeholder="Nombre Contacto" />
                                        </Form.Group>
                                </Form.Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Usuario Admin</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                <Form.Row>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label>Email</Form.Label>
                                                <Form.Control type="text" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label>Contraseña</Form.Label>
                                                <Form.Control type="text" placeholder="Contraseña" />
                                        </Form.Group>
                                        
                                </Form.Row>
                                </Form>
                                <Button variant="primary">
                                                Submit
                                            </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsValidation;
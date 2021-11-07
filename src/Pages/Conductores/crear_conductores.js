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
                                <Card.Title as="h5">Ingreso Conductor</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="firstName">Nombre</Form.Label>
                                            <TextInput
                                                name="firstName"
                                                id="firstName"
                                                placeholder="Nombre"
                                                required value={this.state.firstName}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="lastName">Apellido</Form.Label>
                                            <TextInput
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Apellido"
                                                minLength="4"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Dirección Email "
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"email no valido"}}
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="password">Contraseña</Form.Label>
                                            <TextInput
                                                name="password"
                                                id="password"
                                                type="password"
                                                placeholder="Contraseña"
                                                required
                                                pattern="(?=.*[A-Z]).{6,}"
                                                errorMessage={{required:"Contraseña requerida", pattern: "La contraseña debe ser mayor a 6 caracteres y debe contener al menos una letra Mayuscula"}}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="confirmPassword">Confirmar Contraseña</Form.Label>
                                            <TextInput
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Confirmar Contraseña"
                                                required
                                                validator={this.matchPassword}
                                                errorMessage={{required:"Confirmacion es requerido", validator: "Las contraseñas no coinciden"}}
                                                value={this.state.confirmPassword}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="phone">Telefono</Form.Label>
                                            <MaskWithValidation
                                                name="phone"
                                                id="phone"
                                                placeholder="Telefono de Contacto"
                                                className="form-control"
                                                required
                                                //validator={(value) => value === "(123) 456-7890"}
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                //successMessage="Looks good!"
                                                //errorMessage={{validator: "Please enter (123) 456-7890"}}
                                                mask={['(', /[1-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        
                                        
                                        <Form.Group as={Col} sm="12">
                                            <Form.Label htmlFor="description">Descripcion</Form.Label>
                                            <TextInput
                                                name="description"
                                                id="description"
                                                placeholder="Descripcion"
                                                multiline
                                                required
                                                value={this.state.description}
                                                onChange={this.handleChange}
                                                rows="3"
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                            <Button type="submit">Crear</Button>
                                        </Form.Group>


                                        
                                    </Form.Row>
                                </ValidationForm>
                                <AnimatedModal animation='slideInDown' showModal={this.state.showModal} modalClosed={() => this.setState({ showModal: false })}>
                                    <Card>
                                        <Card.Header as="h5" className="theme-bg2">
                                            User Information
                                        </Card.Header>
                                        <Card.Body>
                                            <ul>
                                                <li><strong>Full Name:</strong> {this.state.firstName} {this.state.lastName}</li>
                                                <li><strong>Email:</strong> {this.state.email}</li>
                                                <li><strong>Password:</strong> Yes</li>
                                                <li><strong>Phone:</strong> {this.state.phone}</li>
                                                 <li><strong>About:</strong> {this.state.description}</li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer className="text-center">
                                            <button onClick={() => this.setState({ showModal: false })} className="btn btn-theme2 md-close">Close Me!!</button>
                                        </Card.Footer>
                                    </Card>
                                </AnimatedModal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsValidation;
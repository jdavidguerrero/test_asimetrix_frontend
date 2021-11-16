import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';

import Aux from "../../hoc/_Aux";
import AnimatedModal from "../../App/components/AnimatedModal";


import { createClient } from '../../api/clients';

class FormsValidation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name:'',
            password: '',
            modal: false,
            submitting: false,
            
        }

        //this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    
 

    handleCheckboxChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async submit(e) {
        e.preventDefault();
      

        
        this.setState({ submitting: true })


        await createClient(this.state.name, this.state.email, this.state.password)
        .then(result=>{
            console.log(result)
            let response = result.response
           
            if(response.status === 500) {
                alert('Petición erronea')
                this.setState({submitting: false , name:'', emial:'', password:''})
            }
            if(response.status === 200 || response.status === 201) {
                //console.log(response.data.authorization);
                alert(' Cliente Creado con Exito')
                this.setState({submitting: false , name:'', emial:'', password:''})
                this.props.history.push('/clientes/listado');
               
                    
            }


        })
        //this.setState({submitting: false , username:'', password:''})
    }
   
    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    matchPassword = (value) => {
        return value && value === this.state.password;
    };

    render() {
        const { submitting, modal } = this.state;
        return (
            <Aux>
                
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Ingreso Usuario</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <ValidationForm onSubmit={this.submit}>
                                <Form.Row>
                                        <Form.Group as={Col} md="6">
                                        <Form.Label htmlFor="Name">Nombre</Form.Label>
                                        <TextInput
                                                name="name"
                                                id="name"
                                                placeholder="Nombre Cliente"
                                                minLength="1"
                                                required
                                                value={this.state.name}
                                                errorMessage={{ required: "Nombre es requerido", minLength: "Minimo 1 caracteres" }}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="Email">Email</Form.Label>
                                            <TextInput
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                minLength="1"
                                                required
                                                value={this.state.email}
                                                errorMessage={{ required: "Usuario es requerido", minLength: "Minimo 1 caracteres" }}
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
                                                placeholder="Password"
                                                required
                                                minLength="1"
                                                errorMessage={{ required: "Password es requerido", minLength: "Minimo 1 caracteres" }}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        
                                </Form.Row>
{
                                !submitting ?
                                                <Button type="submit" className="btn btn-primary shadow-2 mb-4">Crear</Button>
                                                :
                                                <Button disabled>
                                                    <span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading...
                                    </Button>
    }
                                </ValidationForm>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsValidation;
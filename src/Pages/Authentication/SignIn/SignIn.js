import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import logo from '../../../assets/images/asimetrix_logo.png';
import { Button, Form, Card } from "react-bootstrap";
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import AnimatedModal from "./../../../App/components/AnimatedModal";


/* Import Login API*/
import { loginUser } from './../../../api/login';


class SignIn extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            modal: false,
            submitting: false,
            
        }

        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
        closeModal() {
            this.setState({
                modal: false
            })
        }
    
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        async submitLogin(e) {
            e.preventDefault();
            //this.props.history.push('/dashboard');
    
            this.setState({ submitting: true })
    
            await loginUser(this.state.username, this.state.password)
                .then(result => {
                    let response = result.response

                    console.log(response)
                    if(response.status === 500) {
                        alert('Petición erronea')
                        this.setState({submitting: false , username:'', password:''})
                    }
                    if(response.status === 400) {
                        alert('Verifique sus Datos')
                        this.setState({submitting: false , username:'', password:''})
                    }
                    if(response.status === 404) {
                        alert('Verifique sus Datos')
                        this.setState({submitting: false , username:'', password:''})
                    }
                    if(response.status === 200 || response.status === 201) {
                        //console.log(response.data.authorization);
                        localStorage.setItem('authorization', JSON.stringify(response.token).replace(/["']/g, ""))
                        localStorage.setItem('company_id', JSON.stringify(response.company_id));
                        localStorage.setItem('name', JSON.stringify(response.name));
                        localStorage.setItem('role', JSON.stringify(response.role).replace(/["']/g, ""));
                        localStorage.setItem('authenticated', true);
                        this.setState({submitting: false})
                        if(response.role =="admin")
                            this.props.history.push('/clientes/listado');
                        else
                            this.props.history.push('/dashboard');
                    }
                })
                .catch(err => {
                    alert(err);
                    this.setState({submitting: false , username:'', password:''})
                })
        }

        componentDidMount() {
            
    
            if (localStorage.getItem('authenticated')== true) {
                this.props.history.push('/')
            }
        }


    render () {
        const { submitting, modal } = this.state;
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper aut-bg-img" style={{backgroundColor: "white", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
                    <div className="auth-content">
                        <div className="text-black">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    {//<i className="feather icon-unlock auth-icon"/>
    }
                                <img src={logo} />
                                </div>

                                <ValidationForm onSubmit={this.submitLogin}>
                                        <h3 className="mb-4 text-black">Login</h3>

                                        <Form.Group>
                                            <Form.Label htmlFor="Usuario">Usuario</Form.Label>
                                            <TextInput
                                                name="username"
                                                id="username"
                                                placeholder="Usuario"
                                                minLength="1"
                                                required
                                                value={this.state.username}
                                                errorMessage={{ required: "Usuario es requerido", minLength: "Minimo 1 caracteres" }}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label htmlFor="password">Password</Form.Label>
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

                                        { /*
                                    <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1"/>
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                  */
                                        }
                                        {
                                            !submitting ?
                                                <Button type="submit" className="btn btn-primary shadow-2 mb-4">Login</Button>
                                                :
                                                <Button disabled>
                                                    <span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading...
                                    </Button>
                                        }

                                        {
                                            /*
                                        }
                                        <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/recovery" className="text-black">Reset</NavLink></p>
                                        */
                                        }
                                    </ValidationForm>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignIn;
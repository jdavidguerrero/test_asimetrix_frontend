import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import logo from '../../../assets/images/asimetrix_logo.png';

class ResetPassword3 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper aut-bg-img" style={{backgroundColor: "white", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
                    <div className="auth-content">
                        <div className="text-black">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                   {//} <i className="feather icon-mail auth-icon"/>
    }
                                <img src={logo} width={300} height={90}/>
                                </div>
                                <h3 className="mb-4 text-black">Reset Password</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <button className="btn btn-primary mb-4 shadow-2">Reset Password</button>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-3" className="text-black">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ResetPassword3;
import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import Register from '../components/users/modal_register';
import $ from 'jquery';
import './../css/login.css';




const Login = props => {

    const { store, actions } = useContext(Context);
    
    const showModalregister = () => {
        $('#modalregister').modal('show');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4" id="login">
                    <div className="card mt-5 border-0">
                        <div className="card-header bg-dark text-light d-flex justify-content-center">
                            Login
                         </div>
                        <div className="card-body">
                            <div className="form-group">
                                {store.getLogin_Error === null ? "" :
                                    (<div className="alert alert-danger d-flex justify-content-center" role="alert">
                                        {store.getLogin_Error.msg}
                                    </div>)
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">E-mail:</label>
                                <input type="text" id="email" name="email" className="form-control rounded-pill"
                                    onChange={e => actions.handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" id="password" name="password" className="form-control rounded-pill"
                                    onChange={e => actions.handleChange(e)} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className='row'>
                                <button id="boton" className="btn btn-dark btn-block" onClick={e => actions.getLogin(e, '/login', props.history)}>Ingresar</button>
                            </div>
                            
                            <Register />
                            <div className="row pt-3">
                                <button className="btn btn-dark btn-block" id="boton" onClick={showModalregister}>Registrarse</button>
                            </div>
                            <div className="row d-flex justify-content-center mt-2 mb-2">
                                <div className="col-12">
                                    {store.createUser_Error === null ? "" :
                                        (<div className="alert alert-danger d-flex justify-content-center" role="alert">
                                            <p>Error al crear nuevo usuario. <br />
                                                Razón: {store.createUser_Error.msg}. <br />
                                                Intente nuevamente por favor.
                                            </p>
                                        </div>)
                                    }
                                </div>
                            </div>            
                        </div>





                      
                            







                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;

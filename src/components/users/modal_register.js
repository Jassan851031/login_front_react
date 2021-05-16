import React from 'react';
import { Context } from '../../store/appContext';
import '../../css/register.css';


export default class Register extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="modal fade" id="modalregister" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header bg-secondary text-light">
                                            <h5 className="modal-title" id="exampleModalLabel">Formulario registro de usuario.</h5>
                                            <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="row">
                                                    <div className="col-12 ">
                                                        {store.createUser_Error === null ? "" :
                                                            (<div className="alert alert-danger d-flex justify-content-center" role="alert">
                                                                {store.createUser_Error.msg}
                                                            </div>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-6">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="name" name="name" className="form-control" id="name_form" value={store.name} onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="last_name">Last name</label>
                                                        <input type="last_name" name="last_name" className="d-inline form-control" id="last_name_form" value={store.last_name} onChange={e => actions.handleChange(e)} />

                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-6">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" name="email" className="form-control" id="email_form" value={store.email} onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                    <div className="col-6">
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-6">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" name="password" className="form-control" id="password_form" value={store.password} onChange={e => actions.handleChange(e)} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer bg-secondary text-light d-flex justify-content-between">
                                            <button type="submit" className="btn btn-dark" data-dismiss="modal">Cancelar</button>
                                            <button type="submit" className="btn btn-dark" onClick={() => actions.createUser(this.props.history)} data-dismiss="modal">Agregar</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }


}

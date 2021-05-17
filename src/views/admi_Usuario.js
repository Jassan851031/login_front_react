import React from 'react';
import { Context } from './../store/appContext';
import { Link, Redirect } from 'react-router-dom';
import '../css/admi_Usuario.css';

export default class Admi_Usuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEdit: {}
        }
    }
    
    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        if (store.isAuthenticated === false) {
                            return <Redirect to="/" />
                        } else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                            return <Redirect to="/users" />
                        return (
                            <>
                                <div className="container">
                                    <div className="row d-flex justify-content-center mb-5">
                                        <div className="col-10 ">
                                            <table className="table table-striped table-dark" id="usuarios">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">ID</th>
                                                        <th className="text-center">Nombre</th>
                                                        <th className="text-center">Apellido</th>
                                                        <th className="text-center">Email</th>
                                                        <th className="text-center">Activo</th>
                                                        <th className="text-center">Admin</th>
                                                        <th colSpan="2" className="text-center border-0">Acciones</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        store.all_users.length > 0 &&
                                                        store.all_users.map((items, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <th scope="row" className="text-center">{items.id}</th>
                                                                    <td className="text-center">{items.name}</td>
                                                                    <td className="text-center">{items.last_name}</td>
                                                                    <td className="text-center">{items.email}</td>
                                                                    <td><input className="ml-4" type="checkbox" disable="disable" checked={items.isActive} /></td>
                                                                    <td><input className="ml-4" type="checkbox" disable="disable" checked={items.isAdmin} /></td>
                                                                    <td className="border-0"><button className="btn btn-dark btn-block border-white">Modificar</button></td>
                                                                    <td className="border-0"><button className="btn btn-danger btn-block" ><i className="fas fa-trash-alt"></i> </button></td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <Link className="btn btn-primary float-right" to="/admin_home">Regresar </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                }
            </Context.Consumer >
        )
    }
}
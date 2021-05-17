import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Context } from './../store/appContext';
import './../css/home_admin.css';


const Home_admin = props => {
    return (
        <>
            <Context.Consumer>
                {
                    ({ store, actions, }) => {
                        if (store.isAuthenticated === false) {
                            return <Redirect to="/" />
                        } else if ((store.isAuthenticated) && (store.currentUser.user.isAdmin === false))
                            return <Redirect to="/users" />
                        return (
                            <div className="container" id="admin-home-container">
                                <div className="row d-flex justify-content-center" id="HomeAmenus">
                                    <div className="col-8">
                                        <div className="botones_admin">
                                            <Link to="/admin_home/users" type="button" className="btn btn-dark btn-lg btn-block rounded-pill border-light" id="botones">Boton de Prueba</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Context.Consumer >
        </>
    )
}
export default Home_admin;
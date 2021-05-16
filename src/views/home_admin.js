import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import './../css/home_admin.css';


const Home_admin = props => {
    return (
        <>
        <div className="container" id="admin-home-container">
            <div className="row d-flex justify-content-center" id="HomeAmenus">
                <div className="col-8">
                    <div className="botones_admin">
                        <Link to="/admin_home/users" type="button" className="btn btn-dark btn-lg btn-block rounded-pill border-light" id="botones">Boton de Prueba
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home_admin;
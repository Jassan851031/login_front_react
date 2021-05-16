import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../store/appContext';
import '../css/navbar.css';

const Navbar = () => {
  const { store, actions } = useContext(Context);


  return (
    <>
      {
        store.isAuthenticated === false ? (

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-center">
                <li className="nav-item active">
                  <h2 className="nav-link">Bienvenido a MyGame</h2>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-between">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/admin_home">MyGame</Link>
                  </li>
                  <li className="nav-item active">
                    <span className="nav-link">Usuario: {store.currentUser.user.name} {store.currentUser.user.last_name}</span>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={() => actions.logOut()}><i className="fas fa-sign-out-alt"></i></Link>
                  </li>
                </ul>
              </div>
            </nav>
          )
      }
    </>
  )
}

export default Navbar;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Navbar from './components/navbar'
import injectContext from './store/appContext'
import Home_admin from './views/home_admin';
import Admi_Usuario from './views/admi_Usuario';

const Layout = props => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path ="/admin_home/users" component={Admi_Usuario}/>
                <Route exact path="/admin_home" component={Home_admin} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(Layout);
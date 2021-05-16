import React, { Component } from 'react';
import {Context} from './store/appContext';

class Test extends Component {
    render(){
        return (
            <Context.Consumer>
                {
                    ({store, actions}) => {
                        return (
                            <h1>Aqui va mi html</h1>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default Test;
import React, { Component } from 'react';
import getState from './flux';


export const Context = React.createContext(null);



const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props) {
            super(props);
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore =>
                    this.setState({
                        store: Object.assign(this.state.store, updatedStore)
                    })
            });
        }

        componentDidMount() {
            this.state.actions.isAuthenticated();
            if (this.state.store.isAuthenticated) {
                this.state.actions.getUsers();
            }
        }
        render() {
            // the initial value for the context its not null anymore, but the current state of this component,
            // the context will have a getStore and setStore functions available then, because they were declared
            // on the state of this component
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return StoreWrapper;
}
export default injectContext;
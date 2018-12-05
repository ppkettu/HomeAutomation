import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

export default class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() =>
                    this.props.isLogged ?
                        (<Redirect to="/list" />) :
                        (<LoginForm />)
                } />
            </Switch>
        )
    }
}

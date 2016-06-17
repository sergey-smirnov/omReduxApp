'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import AppBar from 'material-ui/AppBar';

// import { user as UserReducer } from '../reducers/userReducer';
// const combinedReducer = combineReducers({ UserReducer });

//TODO: replace with import
let omReactApp = require('../reducers/reducers').omReactApp;

const store = createStore(omReactApp);

const muiTheme = getMuiTheme();

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar title="One More Redux Application" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            </MuiThemeProvider>
        );
    }
}

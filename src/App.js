import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import LoginPage from './components/login/login.js';
export default function scenes(){
    return Actions.create(
        <Scene key="root">
          <Scene key="LoginPage" component={LoginPage} title="LoginPage" initial={true} />
          <Scene key="Home" component={LoginPage} title="Home"/>
        </Scene>
    );
}
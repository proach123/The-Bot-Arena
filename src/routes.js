import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import App from './App'
import Arena from './Components/Arena/Arena'
import Landing from './Components/Landing/Landing';

export default (
    <Switch>
        <Route path='/arena' component={Arena}/>
        <Route exact path='/' component={Landing}/>
    </Switch>
)
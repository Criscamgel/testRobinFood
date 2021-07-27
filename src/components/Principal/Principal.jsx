import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { RutaPrivada } from '../../routes/RutaPrivada';
import { Brand } from '../BrandMenu/Brand/Brand';
import { BrandMenu } from '../BrandMenu/BrandMenu';
import { Login } from '../Login/Login';
import './Principal.scss';

export const Principal = () => {
    return (
        <>
          <Router>
                <div>
                    <Switch>
                        <Route exact path="/testRobinFood/login" component={ Login }/>
                        <RutaPrivada exact path="/testRobinFood/inicio" component={ BrandMenu } />
                        <RutaPrivada exact path="/testRobinFood/pizzeria" component={ Brand } />
                        <Redirect to="/testRobinFood/login" />
                    </Switch>
                </div>
          </Router>  
        </>
    )
}

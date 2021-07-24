import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { RutaPrivada } from '../../routes/RutaPrivada';
import { BrandMenu } from '../BrandMenu/BrandMenu';
import { Login } from '../Login/Login';
import './Principal.scss';

export const Principal = () => {
    return (
        <>
          <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={ Login }/>
                        <RutaPrivada exact path="/inicio" component={ BrandMenu } />
                        <Redirect to="/login" />
                    </Switch>
                </div>
          </Router>  
        </>
    )
}

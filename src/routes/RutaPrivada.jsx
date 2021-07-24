import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext'

export const RutaPrivada = ({ component: Component, ...props }) => {

    const loginContext = useContext(LoginContext);
    const { login } = loginContext;

    return (
        <Route { ...props } render= { props => !login ? ( <Redirect to="/login" /> ) 
        : ( <Component { ...props } /> )
        } />
    )
}

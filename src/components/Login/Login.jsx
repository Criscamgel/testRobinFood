import React, { useState } from 'react';
import './Login.scss';
import BestPizza from '../../images/Login-Best-Pizza.png';
import validator from 'validator';
import { useForm } from '../hooks/useForm';
import icUser from '../../images/ic_usuario.png';
import icPassword from '../../images/ic_contrasena.png';

export const Login = () => {

    const [msgError, setMsgError] = useState({
        user: "",
        password: ""
    });

    const [data, setData] = useState({
        user: "",
        password: ""
    });
    
    const [datosForm, handleInputChange, reset] = useForm({
        user: "",
        password: ""
    });
    
    const { user, password } = datosForm;

    const submitLogin = (e) => {
        e.preventDefault();
        validarCampos();
        validarCampos() && enviarDatos();
    }

    const validarCampos = () => {

        let msgError = {}

        msgError.user = validator.isEmpty(user) ? "El campo usuario debe estar diligenciado" : null;
        if (!validator.isEmpty(user)){
            msgError.user = !validator.isLength(user.toString(),{min:5, max:10}) ? "El usuario diligenciado es invalido, debe contener más de 5 caracteres" : null;
        }
        
        msgError.password = validator.isEmpty(password) ? "El campo password debe estar diligenciado" : null;
        if (!validator.isEmpty(password)){
            msgError.password = !validator.isLength(password.toString(),{min:5, max:10}) ? "La contraseña diligenciada tiene una longitud invalida" : null;
        }

        setMsgError({
            ...msgError
        })

        return !Object.values(msgError).some(v => v);
    }

    const enviarDatos = () => {

        setData(datosForm);
    }

    return (
        <>

            <div className="container">
                <div className="side"></div>
                    <div className="content">
                        <img className="bestPizza center" src={ BestPizza } alt="" />
                        <div className="titulos">
                            <p className="tituloLogin textCenter">Bienvenido</p>
                            <p className="subtituloLogin textCenter">A las mejores pizzas del país</p>
                        </div>
                        <form className="center" onSubmit={ submitLogin }>
                            <div className="inputIcon">
                            <input 
                                type="text" 
                                name="user" 
                                value={ user }
                                onChange={ handleInputChange }
                                placeholder="Usuario"
                                required 
                            />
                            <img src={ icUser } alt="" />
                            </div>

                            <div className="inputIcon">
                            <input 
                                type="password"  
                                name="password" 
                                value={ password }
                                onChange={ handleInputChange }
                                placeholder="Contraseña"
                                required 
                            />
                            <img src={ icPassword } alt="" />
                            </div>
                            <p className="textCenter remember">Olvidaste tu contraseña?</p>
                            <button type="submit">Iniciar Sesión</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

import React, { useContext, useEffect, useState } from 'react';
import './Login.scss';
import BestPizza from '../../images/Login-Best-Pizza.png';
import validator from 'validator';
import { useForm } from '../hooks/useForm';
import icUser from '../../images/ic_usuario.png';
import icPassword from '../../images/ic_contrasena.png';
import { DataContext } from '../../context/GlobalDataContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const Login = () => {

    const [msgError, setMsgError] = useState({
        user: "",
        password: ""
    });

    const [data, setData] = useState({
        user: "",
        password: "",
        login: false
    });
    
    const [datosForm, handleInputChange, reset] = useForm({
        user: "",
        password: "",
        login: false
    });
    
    const { user, password } = datosForm;
    const { setDataGlobal, DataGlobal } = useContext(DataContext);

    useEffect(() => {
        obtenerData();
      }, [])

    const obtenerData = async() => {
        try{
            const resp = await axios.get(process.env.REACT_APP_DEV_PRODUCTS_USERS_URL.toString());
            const { data } = resp;
            setDataGlobal(data);
            
        }catch(err) {
            alert(`!UPS! Ocurrio un error con el servicio, por favor vuelve a ingresar mas tarde, Error: ${err}`);
        }
    }
    
    const submitLogin = (e) => {
        e.preventDefault();
        validarCampos();
        setData(datosForm);
        validarCampos() && consultarDatos();
    }

    const validarCampos = () => {

        let msgError = {}

        msgError.user = validator.isEmpty(user) ? "El campo usuario debe estar diligenciado" : null;
        if (!validator.isEmpty(user)){
            msgError.user = !validator.isLength(user.toString(),{min:5, max:40}) ? "El usuario diligenciado es invalido, debe contener más de 5 caracteres" : null;
        }
        
        msgError.password = validator.isEmpty(password) ? "El campo password debe estar diligenciado" : null;
        if (!validator.isEmpty(password)){
            msgError.password = !validator.isLength(password.toString(),{min:5, max:40}) ? "La contraseña diligenciada tiene una longitud invalida" : null;
        }

        setMsgError({
            ...msgError
        })

        return !Object.values(msgError).some(v => v);
    }

    const login = () => {
        
        let login;
        DataGlobal.response.users.filter(
            (data) => { 
            login = data.email == datosForm.name && data.password == datosForm.password; 
            }
        );
        console.log(login);
        return login
    }

    const consultarDatos = async() => {
        await data.name;
        console.log(data);
        login() && <Redirect to='/inicio'/>;

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
                            <small>{ msgError.user }</small>
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
                            <small>{ msgError.password }</small>
                            </div>
                            <p className="textCenter remember">Olvidaste tu contraseña?</p>
                            <button type="submit" onClick={ submitLogin }>Iniciar Sesión</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

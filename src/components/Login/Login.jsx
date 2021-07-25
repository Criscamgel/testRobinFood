import React, { useContext, useEffect, useState } from 'react';
import './Login.scss';
import BestPizza from '../../images/Login-Best-Pizza.png';
import validator from 'validator';
import { useForm } from '../hooks/useForm';
import icUser from '../../images/ic_usuario.png';
import icPassword from '../../images/ic_contrasena.png';
import { DataContext } from '../../context/GlobalDataContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

export const Login = () => {

    const history = useHistory();

    const [msgError, setMsgError] = useState({
        user: "",
        password: "",
        login: ""
    });

    const loginContext = useContext(LoginContext);
    const { setLogin } = loginContext;
    
    const [datosForm, handleInputChange, reset] = useForm({
        user: "pperez@perez.com",
        password: "pperezs123",
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
        validarCampos() && autenticar();
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

    const autenticar = () => {
        
        let loginBool;
        DataGlobal.response.users.find(
            (data) => {
            loginBool = data.email === datosForm.user;
            if(loginBool){
            loginBool = data.password === datosForm.password;
                if(loginBool){
                    setLogin({user: datosForm.user,
                              password: datosForm.password,  
                              login: loginBool});
                              history.push("/inicio");;
                }else{
                    setMsgError({
                        login: "Usuario o Contraseña invalido, revisa las credenciales" 
                    });
                }    
            }
            }
        );
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
                            <button onClick={ submitLogin }>Iniciar Sesión</button>
                            <small className="textCenter">{ msgError.login }</small>
                        </form>
                    </div>
            </div>
        </>
    )
}

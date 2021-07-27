import './BrandMenu.scss';

import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../context/GlobalDataContext";
import imgPass from '../../images/ic_contrasena.png';
import { Footer } from '../Footer/Footer';
import { StoreContext } from '../../context/StoreContext';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';

export const BrandMenu = () => {

    const history = useHistory();

    const dataContext = useContext(DataContext);
    const { dataGlobal } = dataContext;

    const storeContext = useContext(StoreContext);
    const { setStore } = storeContext;

    const loginContext = useContext(LoginContext);
    const { setLogin } = loginContext;

    const [ busqueda, setBusqueda ] = useState("");
    const [ mostrarBusqueda, setMostrarBusqueda ] = useState(false);
    const [ filtro, setFiltro ] = useState([]);

    useEffect(() => {      
        if(busqueda !== "" && busqueda) {
            const busquedaLoc = busqueda.toLowerCase();
            const filtro = dataGlobal.stores.filter( store => {
                    return store.name.toLowerCase().includes(busquedaLoc);
            })
            setMostrarBusqueda(true);
            setFiltro(filtro);
        }else{
            setMostrarBusqueda(false);
        }


    }, [busqueda])
        
    return (
        <>
        <div className="containerBrandMenu">
            <div className="side"></div>
            <div className="content">
                <p className="pestana">Pizzerias</p>
                <p className="titulo">Tiendas</p>
                <p className="subtitulo">Escoge tu pizzeria favorita</p>

                <div className="inputIcon">
                <input
                    className="inputBusqueda" 
                    type="text" 
                    name="busqueda"
                    value= { busqueda }
                    onChange={ e => setBusqueda(e.target.value) }
                    placeholder="Busca tu Pizzeria favorita"
                />
                <i className="fa fa-search"></i>
                </div>

                { !mostrarBusqueda
                ?
                <div className="brands">
                    { 
                        dataGlobal.stores.map((pizzeria) => (
                        
                        <div key= { pizzeria.id } className="brand animate__bounceIn" onClick={ () => { setStore(pizzeria); history.push("/pizzeria") } }>
                            <img 
                                src={ pizzeria.logo }
                                alt={ pizzeria.name } 
                            />
                            <p className="pizzeriaName"> { pizzeria.name } </p>
                            <p className="pizzeriaDireccion"> { pizzeria.address } </p>
                        </div>
                        
                    )) }
                </div>
                :
                <div className="brands">
                    { filtro.map((pizzeria) => (
                        <div key={ pizzeria.id } className="brand" onClick={ () => { setStore(pizzeria); history.push("/pizzeria") } }>
                            <img 
                                src={ pizzeria.logo }
                                alt={ pizzeria.name } 
                            />
                            <p className="pizzeriaName"> { pizzeria.name } </p>
                            <p className="pizzeriaDireccion"> { pizzeria.address } </p>
                        </div>
                    )) }
                </div>
                }

            </div>
            <div className="sideFinal">
                <div className="contExit" onClick={ () => {setLogin({ login: false }); history.push("/inicio")} }>
                    <img src={ imgPass } alt="" />
                    <p className="exit">Salir</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

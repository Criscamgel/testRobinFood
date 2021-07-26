import './BrandMenu.scss';

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { DataContext } from "../../context/GlobalDataContext";
import imgPass from '../../images/ic_contrasena.png';
import { Footer } from '../Footer/Footer';

export const BrandMenu = () => {

    useEffect(() => {
        getImgPizzerias();
    }, [])

    const dataContext = useContext(DataContext);
    const { DataGlobal } = dataContext;
    const [dataGlobal, setDataGlobal] = useState([]);
    let dataGlobalInt = [ ...DataGlobal.response.stores ];
        
    const getImgPizzerias = async() => {
        try{
            const resp = await axios.get(process.env.REACT_APP_PIZZERIAS);
            const { data } = resp;

            dataGlobalInt.map((store, index) => {
                if(data.length > 0) {
                data.filter((pizzeria) => {
                    if (pizzeria.id === index + 1) {
                        store.logo = pizzeria.logo;
                    }
                })
                }
            });

            setDataGlobal(dataGlobalInt);
            console.log(dataGlobalInt);
            
        }catch(err) {
            alert(`!UPS! Ocurrio un error con el servicio, por favor vuelve a ingresar mas tarde, Error: ${err}`);
        }
    }

    return (
        <>
        <div className="containerBrandMenu">
            <div className="side"></div>
            <div className="content">
                <p className="pestana">Pizzerias</p>
                <p className="titulo">Tiendas</p>
                <p className="subtitulo">Escoge tu pizzeria favorita</p>

                <div className="brands">
                    { dataGlobal.length > 0 && dataGlobal.map(pizzeria => (
                        <div className="brand">
                        <img 
                            key={ pizzeria.id } 
                            src={ pizzeria.logo }
                            alt={ pizzeria.name } 
                        />
                        <p className="pizzeriaName"> { pizzeria.name } </p>
                        <p className="pizzeriaDireccion"> { pizzeria.address } </p>
                        </div>
                    )) }
                </div>
            </div>
            <div className="sideFinal">
                <div className="contExit">
                    <img src={ imgPass } alt="" />
                    <p className="exit">Salir</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

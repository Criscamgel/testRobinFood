import './BrandMenu.scss';

import React, { useEffect } from 'react'
import axios from 'axios';

export const BrandMenu = () => {

    useEffect(() => {
        getPizzerias();
    }, [])
    
    const getPizzerias = async() => {
        try{
            const resp = await axios.get(process.env.REACT_APP_PIZZERIAS.toString());
            const { data } = resp;
            console.log(data);
            
        }catch(err) {
            alert(`!UPS! Ocurrio un error con el servicio, por favor vuelve a ingresar mas tarde, Error: ${err}`);
        }
    }

    return (
        <div className="container">
            <div className="side"></div>
            <div className="content">
                <p className="pestana">Pizzerias</p>
                <p className="titulo">Tiendas</p>
                <p className="subtitulo">Escoge tu pizzeria favorita</p>

                <div className="brands">

                </div>
            </div>
            <div className="side"></div>
        </div>
    )
}

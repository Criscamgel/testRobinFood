import './Brand.scss';

import React, { useContext } from 'react';
import { StoreContext } from '../../../context/StoreContext';
import { Footer } from '../../Footer/Footer';
import imgPass from '../../../images/ic_contrasena.png';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../../context/LoginContext';

export const Brand = () => {

    const storeContext = useContext(StoreContext);
    const { store } = storeContext;
    const history = useHistory();
    const loginContext = useContext(LoginContext);
    const { setLogin } = loginContext;

    return (
        <>
            <div className="containerPizzeria">
                <div className="side"></div>
                    <div className="content">
                        <p className="pestana">{ store.name }</p>
                        <div className="contEncabezado">
                            <p className="descripcion">
                                { store.description }
                            </p>
                            <img src={ store.logo } alt="" />
                        </div>
                        <p className="address">
                            { store.address }
                        </p>
                        <div className="titulo">
                            Productos:
                        </div>
                        <div className="products">
                            { store.products.map( (producto, i) => (
                                <ul key={ i }>
                                    <i className="fa fa-star"/>
                                    <li> { producto.name } </li>
                                </ul>
                            )) }
                        </div>
                    </div>
                <div className="sideFinal">
                    <div className="contExit" onClick={ () => {setLogin({ login: false }); history.push("/inicio")} }>
                        <img src={ imgPass } alt="" />
                        <p className="exit">Salir</p>
                    </div>
                    <div className="side"></div>

                    <div className="volver" onClick={ () => { history.push("/inicio") } }>
                        <i className="fa fa-chevron-circle-left"/>
                        <p>Volver</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

import './Footer.scss';
import bestPizza from '../../images/best_pizza_blanco.png';

import React from 'react'

export const Footer = () => {
    return (
        <div className="contFooter">
            <div className="side"></div>
                <div className="content">
                    <div className="social">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
            <div className="sideFinal">
                <img src={ bestPizza } alt="" />
            </div>            
        </div>
    )
}

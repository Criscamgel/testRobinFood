import './Footer.scss';
import bestPizza from '../../images/Best_Pizza_blanco.png';

import React from 'react'

export const Footer = () => {
    return (
        <div className="contFooter">
            <div className="side"></div>
                <div className="content">
                    <div className="social">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
            <div className="sideFinal">
                <img src={ bestPizza } alt="" />
            </div>            
        </div>
    )
}

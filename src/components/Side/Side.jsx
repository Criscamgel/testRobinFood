import './Side.scss';
import React from 'react';
import Pizza from '../../images/Pizza.png';

export const Side = () => {
    return (
        <>
            <div className="oldDesk imgContainer">
                <img className="center" src={ Pizza } alt="" />
            </div>
        </>
    )
}

import React, { createContext, useState } from 'react';

export const PizzeriasContext = createContext();


export const PizzeriasProvider = (props) => {

    const [pizzerias, getpizzerias] = useState([]);
    
    return (
        <PizzeriasContext.Provider
            value={{
                pizzerias,
                getpizzerias
            }}
        >
            { props.children }
        </PizzeriasContext.Provider>
    )
}

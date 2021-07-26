import React, { createContext, useState } from 'react';

export const StoreContext = createContext();


export const StoreProvider = (props) => {

    const [store, setStore] = useState({});
    
    return (
        <StoreContext.Provider
            value={{
                store,
                setStore
            }}
        >
            { props.children }
        </StoreContext.Provider>
    )
}

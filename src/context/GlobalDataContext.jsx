import React, { createContext, useState } from 'react';

export const DataContext = createContext();


export const DataProvider = (props) => {

    const [DataGlobal, setDataGlobal] = useState();
    
    return (
        <DataContext.Provider
            value={{
                DataGlobal,
                setDataGlobal
            }}
        >
            { props.children }
        </DataContext.Provider>
    )
}

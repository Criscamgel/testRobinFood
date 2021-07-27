import React, { createContext, useState } from 'react';

export const DataContext = createContext();


export const DataProvider = (props) => {

    const [dataGlobal, setDataGlobal] = useState({});
    
    return (
        <DataContext.Provider
            value={{
                dataGlobal,
                setDataGlobal
            }}
        >
            { props.children }
        </DataContext.Provider>
    )
}

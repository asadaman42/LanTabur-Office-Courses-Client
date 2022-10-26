import React, { useState } from 'react';
import { createContext } from 'react';

export const UniversalContext = createContext();

const ContexSupplier = ({children}) => {

    const [mode, setmode] = useState("light");

    const toggleMode = () => {
        if (mode === "light") {
            setmode("dark");
            document.body.style.backgroundColor = "#050122"; //'#042743'

        }

        else {
            setmode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    const user = {displayName: 'asad'}

    const contextInformation = {
        user,
        toggleMode,
        mode, 
        
    };

    return (
        <div>
            <UniversalContext.Provider value={contextInformation}>
                {children}
            </UniversalContext.Provider>            
        </div>
    );
};

export default ContexSupplier;
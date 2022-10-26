import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";

export const UniversalContext = createContext();
// const auth = getAuth();

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

    const user = {
        displayName: 'asad',
        photoURL: 'https://i.ibb.co/vBg5s0M/Microsites-bro.png'
    }

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
import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../FireBase/FireBase.config';

export const UniversalContext = createContext();
const auth = getAuth(app);

const ContexSupplier = ({children}) => {

    const googleLogInProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }

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
        googleLogInProvider, 

        
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
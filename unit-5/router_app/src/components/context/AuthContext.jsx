import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false);

    const handleState = () => {
        setIsAuth(!isAuth);
    }

    return <AuthContext.Provider value = {{isAuth, handleState}}>{children}</AuthContext.Provider>
}
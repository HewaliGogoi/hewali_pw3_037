import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState('');

    const toggleAuth = () => {
        if(isAuth){
            setIsAuth(false);
            setToken('');
            return;
        }

        let payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }

        payload = JSON.stringify(payload);

        fetch('https://reqres.in/api/login',
        {
            method: 'POST',
            body: payload,
            headers: {"Content-Type": "application/json"}
        })
        .then((data)=> data.json())
        .then((data)=> {
            console.log(data.token);
            setToken(data.token);
            setIsAuth(!isAuth);
        });
    }

return <AuthContext.Provider value = {{isAuth, toggleAuth, token}}>{children}</AuthContext.Provider>
}
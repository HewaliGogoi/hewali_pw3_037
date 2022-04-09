export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (payload) => {
    return{
        type: LOGIN,
        payload
    }
}

export const logoutAction = (payload) => {
    return{
        type: LOGOUT,
        payload
    }
}
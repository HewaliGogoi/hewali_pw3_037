import {LOGIN, LOGOUT} from './action';

const init = {
    user:null,
    isAuth:false
}

export const reducer = (state=init, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user : action.payload
            }
        
        case LOGOUT:
            return {
                ...state,
                user : action.payload
            }
    }
}
import { ADD_TODO } from "./action";

export const reducer = (store, action) => {
    switch (action.type){
        case ADD_TODO:
            return {
                ...store,
                todo : [...action.payload]
            };
        default:
            return store;
    }
}
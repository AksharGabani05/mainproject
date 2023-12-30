import { LOGIN, LOGOUT, REGESTER } from "./ActionType";


export const regester = (userData) => {
    return {
        type: REGESTER,
        payload: userData,
    };
};

export const login = (userData) => {
    return {
        type: LOGIN,
        payload: userData,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
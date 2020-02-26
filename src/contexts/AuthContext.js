import React, { createContext, useReducer, useEffect, useContext, useMemo } from 'react';
import { authReducer, initialState } from '../reducer/authReducer';

import AsyncStorage from '@react-native-community/async-storage';
const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState || {});
    useEffect(() => {
        // localStorage.setItem('books', JSON.stringify(books));
        console.log("Auth Context ", state);
    }, [state]);

    // Get Auth state
    // const getAuthState = async () => {
    //     try {
    //         //GET DATA
    //         let data = await getStorageData();

    //         if (data) await handleLogin(data);
    //         else await handleLogout(data);

    //         return data;
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // };


    // // Handle Login
    // const handleLogin = async (data) => {
    //     try {
    //         await setStorageData(data); //STORE DATA
    //         setAuthorization(data.token); //AXIOS AUTHORIZATION HEADER
    //         dispatch({ type: LOGGED_IN, user: data.user }); //DISPATCH TO REDUCER
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // };

    // // Handle Logout
    // const handleLogout = async () => {
    //     try {
    //         await setStorageData(); //REMOVE DATA
    //         setAuthorization(null); //AXIOS AUTHORIZATION HEADER
    //         dispatch({ type: LOGGED_OUT });//DISPATCH TO REDUCER
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // };

    const value = useMemo(() => {
        return { state, dispatch };
    }, [state]);


    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
export default AuthContextProvider;

// export const setAuthorization = (token) => {
//     // Apply authorization token to every request if logged in
//     if (!token) delete axios.defaults.headers.common["Authorization"];
//     else axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// export const getStorageData = async () => {
//     try {
//         let token = await AsyncStorage.getItem(TOKEN_KEY);
//         let user = await AsyncStorage.getItem(USER_KEY);

//         if (token !== null && user !== null) return { token, user: JSON.parse(user) };
//         else return null;

//     } catch (error) {
//         throw new Error(error)
//     }
// };

// export const setStorageData = async (data) => {
//     try {
//         if (!data) await AsyncStorage.multiRemove(keys);
//         else {
//             let { token, user } = data;
//             let data_ = [[USER_KEY, JSON.stringify(user)], [TOKEN_KEY, token]];
//             await AsyncStorage.multiSet(data_);
//         }
//     } catch (error) {
//         throw new Error(error)
//     }
// };
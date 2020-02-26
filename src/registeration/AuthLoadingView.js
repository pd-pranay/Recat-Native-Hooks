import React, { useEffect, useContext } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
// import { StackActions } from 'react-navigation';
import { AuthContext } from '../contexts/AuthContext';

import { useAuth } from "../contexts/AuthContext";
//todo make loading isAppLoading false and set login full 
export default function AuthLoading(props) {
    // const { navigate } = props.navigation;
    // const { getAuthState } = useAuth();
       const { state, dispatch } = useAuth();

    useEffect(() => {
        // initialize()
        setTimeout(function () {
               dispatch({ type: 'APP_LOADING' });
        }, 500);
    }, []);

    // async function initialize() {
    //     try {
    //         const { user } = await getAuthState();

    //         if (user) {
    //             //check if username exist
    //             let username = !!(user.username);

    //             if (username) navigate('App');
    //             else navigate('Auth', {}, StackActions.replace({ routeName: "Username" }))

    //         } else navigate('Auth');
    //     } catch (e) {
    //         navigate('Auth');
    //     }
    // }

    return (
        <View style={{ backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator />
            <Text>{"Loading User Data"}</Text>
        </View>
    );
};
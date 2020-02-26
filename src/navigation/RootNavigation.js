import React, { useState, useReducer, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthLoadingView from '../registeration/AuthLoadingView';


import AuthNavigation from './AuthNavigation'
import MainTabNavigation from './MainTabNavigation';

import LoginView from '../registeration/LoginView';
import RegisterationView from '../registeration/RegisterationView';
// import { State } from 'react-native-gesture-handler';
// import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from "../contexts/AuthContext";
import { createStackNavigator } from '@react-navigation/stack';


export default function RootNavigation(props) {
    const { state, dispatch } = useAuth();
    const Stack = createStackNavigator();
    console.log('rootnav', state);
    return (

        <NavigationContainer>
            {
                state.isAppLoading ?
                    (
                        // <AuthNavigation />
                        // set  access token and user details in local storage
                        // set isloading false 
                        // isapplogin true
                        <>
                            <Stack.Navigator>
                                <Stack.Screen name="AuthLoading Screen" component={AuthLoadingView} />
                            </Stack.Navigator>
                        </>

                    ) : state.isLoggedIn ?
                        (
                            <MainTabNavigation />
                        ) : (
                            <AuthNavigation />
                        )
            }
        </NavigationContainer>
    );

}
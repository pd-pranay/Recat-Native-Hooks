import React, { useState, useReducer, useContext } from 'react';

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginView from '../registeration/LoginView';
import RegisterationView from '../registeration/RegisterationView';

import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from "../contexts/AuthContext";
import AuthLoadingView from '../registeration/AuthLoadingView';
export default function RootNavigation(props) {

    const Stack = createStackNavigator();
    // const { getAuthState } = useAuth();
    const { state, dispatch } = useAuth();
    console.log(state);
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="AuthLoading Screen" component={AuthLoadingView} /> */}
            <Stack.Screen name="Registeration Screen" component={RegisterationView} />
            <Stack.Screen name="Login Screen" component={LoginView} />
        </Stack.Navigator>
    );

}
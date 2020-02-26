import React, { useState, useReducer, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PlayWinView from './PlayWinView';
import StatusTabNavigation from './StatusTabNavigation';

export default function PlayWinNavigation({ route, navigation }) {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Play Win" component={PlayWinView} />
            <Stack.Screen name="Status" component={StatusTabNavigation} />
        </Stack.Navigator>
    );

}
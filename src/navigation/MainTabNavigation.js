import React, { useState, useReducer } from 'react';

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlayWinNavigation from '../playwin/PlayWinNavigation';
import ProfileView from '../profile/ProfileView';
import EarnView from '../earn/EarnView';

export default function RootNavigation({ route, navigation }) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="PlayWin Screen" component={PlayWinNavigation} />
            <Tab.Screen name="Earn Screen" component={EarnView} />
            <Tab.Screen name="Profile Screen" component={ProfileView} />
        </Tab.Navigator>

    );

}
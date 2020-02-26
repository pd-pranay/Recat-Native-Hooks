import React, { Component } from 'react';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TournamentListView from './TournamentListView';
import UpComingView from './UpComingView';
import OnGoingView from './OnGoingView';
import CompletedView from './CompletedView';

export default function StatusTabNavigation(props) {
    const TabTop = createMaterialTopTabNavigator();
    // console.log('status ', props);
    const { gameType } = props.route.params;
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Up Coming" component={UpComingView} initialParams={{ gameType: gameType }} />
            <TabTop.Screen name="On Goming" component={OnGoingView} initialParams={{ gameType: gameType }} />
            <TabTop.Screen name="Completed" component={CompletedView} initialParams={{ gameType: gameType }} />
        </TabTop.Navigator>
    );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have Ionicons installed
import Home from './Home';
import Movies from './Movies';
import Profile from './Profile';
import { bRed } from '../constents';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: bRed, // Set the active tab color to red
                    inactiveTintColor: 'black', // Set the inactive tab color to black
                }}
            >
                 {/* <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="film" color={color} size={size} />
                        ),
                    }}
                />  */}
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" color={color} size={size} />
                        ),
                        headerShown:false,
                    }}
                />
            </Tab.Navigator>

    );
};

export default BottomTabNavigator;

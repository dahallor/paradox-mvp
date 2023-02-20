import { createStackNavigator } from "@react-navigation/stack";

import { Text } from 'react-native'

import { useState, useEffect } from 'react'

import { GETRequest } from '../components/shared/Requests'

import ROUTES from '../constants/Routes'

import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";
import HomeNav from '../routes/HomeNav'
import ChatHeader from "../components/chat-log/ChatHeader";



export default function ChatNav(props) {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home-ChatNav" component={HomeNav} />
            <Stack.Screen name="Chat" component={ChatScreen} options={({ navigation, route, userUUID }) => ({
                headerTitle: (props) => <ChatHeader {...props} />
            })} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={({ navigation, route, userUUID }) => ({
                headerTitle: (props) => <Text>{route.params.name}</Text>
            })} />
        </Stack.Navigator>
    )
}
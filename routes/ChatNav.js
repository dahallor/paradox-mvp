import { createStackNavigator } from "@react-navigation/stack";

import { Text } from 'react-native'

import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import DebugScreen from '../screens/bottom-tabs/DebugScreen'
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";
import HomeNav from '../routes/HomeNav'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/core";



export default function ChatNav(props) {
    const Stack = createStackNavigator()

    function doStuff() {
        props.navigation.navigate('Profile')

    }

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home-ChatNav" component={HomeNav} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}
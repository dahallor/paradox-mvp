import { createStackNavigator } from "@react-navigation/stack";

import { Text } from 'react-native'

import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import DebugScreen from '../screens/bottom-tabs/DebugScreen'
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";
import HomeNav from '../routes/HomeNav'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/core";
import ChatHeader from "../components/chat-log/ChatHeader";



export default function ChatNav(props) {
    const Stack = createStackNavigator()

    function doStuff() {
        props.navigation.navigate('Profile')

    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home-ChatNav" component={HomeNav} />
            <Stack.Screen name="Chat" component={ChatScreen} options={({ navigation, route }) => ({
                headerTitle: (props) => <ChatHeader {...props} />
            })} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={({ navigation, route }) => ({
                headerTitle: (props) => <Text>{route.params.name}</Text>
            })} />
        </Stack.Navigator>
    )
}
import { createStackNavigator } from "@react-navigation/stack";

import { Text } from 'react-native'

import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import DebugScreen from '../screens/bottom-tabs/DebugScreen'
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";
import HomeNav from '../routes/HomeNav'
import { TouchableOpacity } from "react-native-gesture-handler";



export default function ChatNav(props) {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Debug">
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Debug" component={DebugScreen} />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    headerTitle: () =>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <Text>Match Name</Text>
                        </TouchableOpacity>

                }} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}
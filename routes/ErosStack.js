import { createStackNavigator } from "@react-navigation/stack";

import ErosScreen from "../screens/top-tabs/ErosScreen";
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";


export default function ErosStack(props) {
    const ErosStack = createStackNavigator()

    return (
        <ErosStack.Navigator initialRouteName="Home">
            <ErosStack.Screen name="Home" component={ErosScreen} />
            <ErosStack.Screen name="Chat" component={ChatScreen} />
            <ErosStack.Screen name="Profile" component={ProfileScreen} />
        </ErosStack.Navigator>
    )
}




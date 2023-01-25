import { createStackNavigator } from "@react-navigation/stack";

import PhilaScreen from "../screens/top-tabs/PhilaScreen";
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";

export default function PhilaStack(props) {
    const PhilaStack = createStackNavigator()
    return (
        <PhilaStack.Navigator initialRouteName="Home">
            <PhilaStack.Screen name="Home" component={PhilaScreen} />
            <PhilaStack.Screen name="Chat" component={ChatScreen} />
            <PhilaStack.Screen name="Profile" component={ProfileScreen} />
        </PhilaStack.Navigator>
    )

}
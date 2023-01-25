import { createStackNavigator } from "@react-navigation/stack";
import LudosScreen from "../screens/top-tabs/LudosScreen";
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";


export default function LudosStack(props) {
    const LudosStack = createStackNavigator()
    return (
        <LudosStack.Navigator initialRouteName="Home">
            <LudosStack.Screen name="Home" component={LudosScreen} />
            <LudosStack.Screen name="Chat" component={ChatScreen} />
            <LudosStack.Screen name="Profile" component={ProfileScreen} />
        </LudosStack.Navigator>
    )

}
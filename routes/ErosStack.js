import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from 'react-native'

import ErosScreen from "../screens/top-tabs/ErosScreen";
import ChatScreen from "../screens/drill-down/ChatScreen";
import ProfileScreen from "../screens/bottom-tabs/ProfileScreen";
import { useRoute } from "@react-navigation/core";


export default function ErosStack(props) {
    const route = useRoute();
    const ErosStack = createStackNavigator();
    console.log(route)

    function doStuff(navigation) {
        navigation.navigate('Profile')
    }

    return (
        <ErosStack.Navigator initialRouteName="Home">
            <ErosStack.Screen name="Home" component={ErosScreen} />
            <ErosStack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    headerTitle: () =>
                        <TouchableOpacity onPress={() => doStuff(props.navigation)}>
                            <Text>{route.matchName}</Text>
                        </TouchableOpacity>

                }} />
            <ErosStack.Screen name="Profile" component={ProfileScreen} />
        </ErosStack.Navigator>
    )
}




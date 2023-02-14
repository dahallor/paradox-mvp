import ErosScreen from '../screens/top-tabs/ErosScreen'
import LudosScreen from '../screens/top-tabs/LudosScreen';
import PhilaScreen from '../screens/top-tabs/PhilaScreen';
import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



export default function HomeNav(props) {
    const Tab = createMaterialTopTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="Eros" component={ErosScreen} />
            <Tab.Screen name="Ludos" component={LudosScreen} />
            <Tab.Screen name="Phila" component={PhilaScreen} />
        </Tab.Navigator>
    )
}
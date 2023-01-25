import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ChatNav from './ChatNav';

import HomeScreen from '../screens/bottom-tabs/HomeScreen';
import ProfileScreen from '../screens/bottom-tabs/ProfileScreen';
import SearchScreen from '../screens/bottom-tabs/SearchScreen';
import SettingsScreen from '../screens/bottom-tabs/SettingsScreen';
import StoreScreen from '../screens/bottom-tabs/StoreScreen';
import DebugScreen from '../screens/bottom-tabs/DebugScreen';
import ROUTES from '../constants/Routes';

export default function RootNav() {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
            {/* <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} /> */}
            <Tab.Screen name={ROUTES.STORE} component={StoreScreen} />
            <Tab.Screen name={ROUTES.SEARCH} component={SearchScreen} />
            <Tab.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
            <Tab.Screen name='DebugTab' component={ChatNav} />
        </Tab.Navigator>
    )
}
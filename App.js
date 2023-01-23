import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './screens/bottom-tabs/HomeScreen';
import ProfileScreen from './screens/bottom-tabs/ProfileScreen';
import SearchScreen from './screens/bottom-tabs/SearchScreen';
import SettingsScreen from './screens/bottom-tabs/SettingsScreen';
import StoreScreen from './screens/bottom-tabs/StoreScreen';

import UserSetupScreen from './screens/drill-down/UserSetupScreen';
import ChatScreen from './screens/drill-down/ChatScreen';

//TODO: Add conditional Rendering to bring either homescreen or login screen based on auth boolean
export default function App() {

  const Tab = createMaterialBottomTabNavigator();


  return (
    <NavigationContainer style={styles.container}>
      {/* <ChatScreen />
      <UserSetupScreen /> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

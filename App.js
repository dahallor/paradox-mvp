import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SetupCard from './components/setup-card/SetupCard';
import UserSetupScreen from './screens/UserSetupScreen';
import Profile from './components/profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';


//TODO: Add conditional Rendering to bring either homescreen or login screen based on auth boolean
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <HomeScreen />
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

import 'react-native-gesture-handler';
//This has to be the topline import for some reason

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';



import RootNav from './routes/RootNav';
import UserSetupScreen from './screens/drill-down/UserSetupScreen';
import ChatScreen from './screens/drill-down/ChatScreen';

//TODO: Add conditional Rendering to bring either homescreen or login screen based on auth boolean
//is logged in? no = login yes = has profile? yes = home no = usersetup
export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <RootNav />
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

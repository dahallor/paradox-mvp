import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SetupCard from './components/setup-card/SetupCard';
import UserSetupScreen from './screens/UserSetupScreen';
import Profile from './components/profile/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UserSetupScreen /> */}
      <SetupCard />
      {/* <Profile /> */}
    </View>
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

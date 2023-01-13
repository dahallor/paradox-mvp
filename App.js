import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SetupCard from './components/setup-card/SetupCard';
import UserSetupScreen from './screens/UserSetupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<UserSetupScreen /> */}
      <SetupCard />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

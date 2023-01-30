import 'react-native-gesture-handler';
//This has to be the topline import for some reason

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';



import RootNav from './routes/RootNav';
import SetupNav from './routes/SetupNav';

//TODO: Add conditional Rendering to bring either homescreen or login screen based on auth boolean
//is logged in? no = login yes = has profile? yes = home no = usersetup
export default function App() {
  let userData = require('./data/user-profile.json')
  console.log(userData.userInfo[0].hasUserProfile)



  return (
    <NavigationContainer style={styles.container}>
      {userData.userInfo[0].hasUserProfile === true ?
        <>
          {userData.userInfo[0].isLoggedIn === true ?
            <RootNav />
            :
            <Auth />
          }
        </>
        :
        <SetupNav />
      }

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

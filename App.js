import 'react-native-gesture-handler';
//This has to be the topline import for some reason

import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import RootNav from './routes/RootNav';
import SetupNav from './routes/SetupNav';


export default function App() {
  let userData = require('./data/user-profile.json')

  return (
    <NavigationContainer style={styles.container}>
      {userData.userInfo.hasUserProfile === true ?
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

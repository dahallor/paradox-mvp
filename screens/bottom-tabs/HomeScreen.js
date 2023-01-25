import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/shared/Header'
import ErosScreen from '../top-tabs/ErosScreen'
import LudosScreen from '../top-tabs/LudosScreen';
import PhilaScreen from '../top-tabs/PhilaScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function HomeScreen() {
    const Tab = createMaterialTopTabNavigator();
    const [color, setColor] = useState('darkblue')
    return (
        <View style={styles.container}>
            <Header color={color} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

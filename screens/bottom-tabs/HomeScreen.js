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
            <Tab.Navigator>
                <Tab.Screen name="Eros" component={ErosScreen} />
                <Tab.Screen name="Ludos" component={LudosScreen} />
                <Tab.Screen name="Phila" component={PhilaScreen} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

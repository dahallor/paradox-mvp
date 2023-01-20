import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from '../shared/Header';
import ErosScreen from '../../screens/ErosScreen';
import LudosScreen from '../../screens/LudosScreen';
import PhilaScreen from '../../screens/PhilaScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Home() {
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
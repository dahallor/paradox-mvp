import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import DisplayMatches from '../../components/home/DisplayMatches';


//TODO: wrap JSON data in API endpoints
//TODO: add a function callback that intialates the navigation on button press from child 
export default function ErosScreen({ navigation, route }) {
    const data = require('../../data/matches.json')

    return (
        <View style={styles.container}>
            <Text>For Love</Text>
            <DisplayMatches matches={data['eros-matches']} type={"eros"} navigation={navigation} route={route} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
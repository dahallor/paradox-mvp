import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import DisplayMatches from '../../components/home/DisplayMatches';

import ChatNav from '../../routes/ChatNav'

//TODO: wrap JSON data in API endpoints 
export default function ErosScreen() {
    const data = require('../../data/matches.json')
    const navigation = useNavigation()

    const [uuid, setUUID] = useState(null)

    function goToChat(uuid) {
        setUUID(uuid)
        console.log(uuid)
        navigation.navigate('ChatScreen')

    }

    return (
        <View style={styles.container}>
            <Text>For Love</Text>
            <DisplayMatches matches={data['eros-matches']} type={"eros"} getUUID={uuid => navigation.navigate('ChatNav', { id: uuid })} />
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
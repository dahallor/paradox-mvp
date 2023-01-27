import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import DisplayMatches from '../../components/home/DisplayMatches';


//TODO: wrap JSON data in API endpoints
//TODO: add a function callback that intialates the navigation on button press from child 
export default function ErosScreen({ navigation, route }) {
    const data = require('../../data/matches.json')
    const [name, setName] = useState(null)
    const [uuid, setUUID] = useState(null)
    const [navFlag, setNavFlag] = useState(false)

    function doStuff(navFlag) {
        if (navFlag === true) {
            setNavFlag(false)
            navigation.setParams({
                matchName: name,
                uuid: uuid
            })
            console.log("Eros")
            console.log(route)
            navigation.navigate('Chat')

        }
    }

    return (
        <View style={styles.container}>
            <Text>For Love</Text>
            <DisplayMatches matches={data['eros-matches']} type={"eros"} getName={name => setName(name)} getUUID={uuid => setUUID(uuid)} getNavFlag={navFlag => doStuff(navFlag)} />
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
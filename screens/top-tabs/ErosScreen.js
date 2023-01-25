import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import DisplayMatches from '../../components/home/DisplayMatches';
import ChatScreen from '../drill-down/ChatScreen';
import ErosStack from '../../routes/ErosStack';

//TODO: wrap JSON data in API endpoints 
export default function ErosScreen({ navigation }) {
    const data = require('../../data/matches.json')
    const [uuid, setUUID] = useState(null)
    console.log(uuid)
    console.log(navigation.navigate)
    console.log(ErosStack.ChatScreen)

    function goToChat(uuid) {
        setUUID(uuid)
        navigation.navigate('ErosStack', {
            screen: 'ChatScreen',
            params: { uuid: uuid },
        })

    }

    return (
        <View style={styles.container}>
            <Text>For Love</Text>
            <DisplayMatches matches={data['eros-matches']} type={"eros"} getUUID={uuid => goToChat(uuid)} />
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
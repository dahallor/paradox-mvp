import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/shared/Header'
import HomeNav from '../../routes/HomeNav';
import ChatNav from '../../routes/ChatNav';


export default function HomeScreen() {
    // const [uuid, setUUID] = useState(null)

    // function selectionHandler(uuid)
    return (
        <View style={styles.container}>
            <Header color={'darkblue'} />
            <HomeNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

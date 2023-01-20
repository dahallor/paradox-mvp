import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from '../shared/Header';
import TopTabs from './TopTabs';


export default function Home() {
    const [tab, setTab] = useState(null)

    return (
        <View style={styles.container}>
            <Header color='darkblue' />
            <TopTabs currentTab={tab => setTab(tab)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState, useRef } from 'react';
import { GETRequest } from '../shared/Requests';
import ROUTES from '../../constants/Routes'
import ChatBubble from './ChatBubble';



export default function ChatLog(props) {
    const route = useRoute()
    console.log(props)

    return (
        < View style={styles.container} >
            <FlatList
                data={props.log}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ChatBubble item={item} route={route} />
                )}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        borderWidth: 1,
        backgroundColor: 'lightblue',
        width: '100%'
    },
    client: {
        alignItems: 'flex-end',
        backgroundColor: 'gray',
        margin: 5,
        padding: 55
    },
    notClient: {
        alignItems: 'flex-start',
        backgroundColor: 'gold',
        margin: 5
    }
})
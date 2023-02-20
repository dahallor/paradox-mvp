import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { GETRequest } from '../shared/Requests';
import ROUTES from '../../constants/Routes'



export default function ChatBubble(props) {
    console.log(props)
    return (
        <>
            {props.item.senderUUID === props.route.params.uuid ?
                <View style={styles.notClient}>
                    <Text>{props.item.message}</Text>
                </View>
                :
                <View style={styles.client}>
                    <Text>{props.item.message}</Text>
                </View>
            }
        </>

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
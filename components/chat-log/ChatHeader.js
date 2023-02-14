import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core'
import { useEffect } from 'react';



export default function ChatHeader(props) {
    const navigation = useNavigation()
    const route = useRoute()
    let name = route.params.matchName
    console.log(navigation, route)
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                    matchName: route.params.matchName,
                    uuid: route.params.uuid
                })} >
                    <Text>{name}</Text>
                </TouchableOpacity>
        })
    }, [navigation])
    return (
        <></>
    )

}


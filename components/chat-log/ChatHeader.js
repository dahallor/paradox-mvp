import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core'



export default function ChatHeader() {
    const navigation = useNavigation()
    const route = useRoute()
    let name = route.params.matchName
    return (
        navigation.setOptions({
            headerTitle: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                    <Text>{name}</Text>
                </TouchableOpacity>
        })

    )
}


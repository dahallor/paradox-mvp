import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function ChatLog(props) {
    const naviagtion = useNavigation()
    return (
        <View style={styles.container}>
            <FlatList
                data={props.message}
                renderItem={({ item }) => {
                    item.client === true ?
                        <Text style={styles.client}>{item.message}</Text>
                        :
                        <Text style={styles.notClient}>{item.message}</Text>
                }
                }
            />
        </View>
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
        backgroundColor: 'gray'
    },
    notClient: {
        alignItems: 'flex-start',
        backgroundColor: 'gold'
    }
})
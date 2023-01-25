import { StyleSheet, Text, View } from 'react-native';



export default function ChatHeader(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.matchName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        backgroundColor: 'gray',
        width: '100%'
    },
    title: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: 24,
        padding: 25,
    }
})
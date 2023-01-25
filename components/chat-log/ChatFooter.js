import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';



export default function ChatFooter() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        backgroundColor: 'gray',
        width: '100%'
    },
    input: {
        borderWidth: 1,
        width: '75%',
        alignItems: 'flex-start'
    },
    button: {
        borderWidth: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

})
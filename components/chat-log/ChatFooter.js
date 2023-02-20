import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'



export default function ChatFooter(props) {
    const [value, setValue] = useState(null)

    function proceed() {
        props.sendMessage(value)
        setValue(null)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value} />
            <TouchableOpacity style={styles.button} onPress={() => proceed()}>
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
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        borderWidth: 1,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    }

})
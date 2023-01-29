import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function SetupFooter(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Skip</Text>
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
    button: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})
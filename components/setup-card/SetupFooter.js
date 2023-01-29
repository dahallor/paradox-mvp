import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function SetupFooter(props) {
    return (
        <View style={styles.container}>
            {props.canGoBack === true ?
                <TouchableOpacity style={styles.activeButton} onPress={() => props.getDirection("Back")}>
                    <Text>Back</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.inactiveButton} disabled={true}>
                    <Text>Back</Text>
                </TouchableOpacity>
            }
            {props.selection !== null ?
                <TouchableOpacity style={styles.activeButton} onPress={() => props.getDirection("Submit")}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.inactiveButton} disabled={true}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            }
            {props.skipable === true ?
                <TouchableOpacity style={styles.activeButton} onPress={() => props.getDirection("Skip")}>
                    <Text>Skip</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.inactiveButton} disabled={true}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderTopWidth: 1,
        backgroundColor: 'gray',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    activeButton: {
        borderWidth: 1,
        padding: 10,
        height: 50,
        width: '20%',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    inactiveButton: {
        opacity: .65,
        borderWidth: 1,
        padding: 10,
        height: 50,
        width: '20%',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }

})
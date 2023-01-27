import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import ChatNav from '../../routes/ChatNav'
import ChatScreen from "../drill-down/ChatScreen";


export default function DebugScreen({ navigation }) {

    function doStuff() {
        navigation.setParams({ matchName: "Custom Match Name" })
        navigation.navigate('Chat',
            {
                matchName: "Param Match Name"
            })
    }

    return (
        <View style={styles.container}>
            <Text>Debug Stub</Text>
            <TouchableOpacity onPress={() => doStuff()}>
                <Text>Click Here to go to chat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    }
})
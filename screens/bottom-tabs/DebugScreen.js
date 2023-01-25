import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import ChatNav from '../../routes/ChatNav'
import ChatScreen from "../drill-down/ChatScreen";


export default function DebugScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Debug Stub</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
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
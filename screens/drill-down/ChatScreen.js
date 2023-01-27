import { StyleSheet, View, Text } from "react-native";
import ChatLog from "../../components/chat-log/ChatLog";
import ChatFooter from "../../components/chat-log/ChatFooter";

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <ChatLog />
            <ChatFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightpurple'
    }
})
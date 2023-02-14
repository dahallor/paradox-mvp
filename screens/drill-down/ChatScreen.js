import { useEffect } from 'react'
import { StyleSheet, View, Text } from "react-native";
import ChatLog from "../../components/chat-log/ChatLog";
import ChatFooter from "../../components/chat-log/ChatFooter";
import ChatHeader from '../../components/chat-log/ChatHeader';


export default function ChatScreen(props) {
    console.log(props)
    return (
        <View style={styles.container}>
            {/* <ChatHeader /> */}
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
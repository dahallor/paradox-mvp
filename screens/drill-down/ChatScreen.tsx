import { useEffect, useState } from 'react'
import { StyleSheet, View } from "react-native";
import ROUTES from '../../constants/Routes'
import { POSTRequest, GETRequest } from '../../components/shared/Requests';
import ChatLog from "../../components/chat-log/ChatLog";
import ChatFooter from "../../components/chat-log/ChatFooter";



export default function ChatScreen(props) {
    const [message, setMessage] = useState(null)
    const [userUUID, setUserUUID] = useState(null)
    const [log, setLog] = useState(null)
    const [status, setStatus] = useState(false)

    async function localGET() {
        let path = ROUTES.ANDROID_USER_USERINFO
        let data = await GETRequest(path)
        setUserUUID(data.uuid)

        path = ROUTES.ANDROID_CHAT + props.route.params.uuid
        data = await GETRequest(path)
        setLog(data)
    }

    useEffect(() => {
        console.log('in useEffect')
        localGET()
        if (message !== null) {
            let path = ROUTES.ANDROID_CHAT + props.route.params.uuid
            let value = {
                message: message,
                timestamp: new Date(),
                senderUUID: userUUID
            }
            console.log(value)
            POSTRequest(path, value)
        }
    }, [message])
    return (
        <View style={styles.container}>
            <ChatLog log={log} />
            <ChatFooter sendMessage={message => setMessage(message)} />
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
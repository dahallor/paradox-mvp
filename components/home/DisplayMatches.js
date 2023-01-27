import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Touchable } from "react-native";
import ChatNav from "../../routes/ChatNav";
import ErosStack from "../../routes/ErosStack";

//TODO: make things top oriented when list is reversed

export default function DisplayMatches(props, item) {

    function referInfoToParent(props, matchName, uuid) {
        props.getName(matchName)
        props.getUUID(uuid)
        props.getNavFlag(true)

    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.matches}
                inverted={true}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.list} onPress={() => referInfoToParent(props, item.matchName, item.uuid)}>
                        <Text>{item.date} | {item.matchName}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 100,
        margin: 25
    },
    list: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderWidth: 1,
        padding: 5,
        margin: 5
    }
})
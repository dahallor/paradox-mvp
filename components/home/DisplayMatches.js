import { StyleSheet, Text, View, FlatList, TouchableOpacity, Touchable } from "react-native";

//TODO: iterate through list backwards so newest match is at the top

export default function DisplayMatches({ matches }) {
    console.log(matches)
    return (
        <View style={styles.container}>
            <FlatList

                data={matches}
                inverted={true}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.list}>
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
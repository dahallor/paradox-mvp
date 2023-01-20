import { StyleSheet, Text, View, FlatList, TouchableOpacity, Touchable } from "react-native";

//TODO: iterate through list backwards so newest match is at the top

export default function DisplayMatches({ matches }) {
    console.log(matches)
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={matches}
                renderItem={({ item }) =>
                    <TouchableOpacity>
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
    },
})
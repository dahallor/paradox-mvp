import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';


export default function List(props) {
    if (props.data.length === 1) {
        props.data.key = 1
        console.log(props.data.length)
    }

    function changeColor() {
        //console.log(styles.container.backgroundColor)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={({ item }) => (
                    <TouchableHighlight underlayColor='purple' onShowUnderlay={() => changeColor()} onPress={() => props.changeSelection(item)}>
                        <Text style={styles.item}>{item.text}</Text>
                    </TouchableHighlight>

                )}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    item: {
        padding: 10,
    },
});
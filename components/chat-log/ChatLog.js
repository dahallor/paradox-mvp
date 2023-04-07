"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var ChatBubble_1 = require("./ChatBubble");
function ChatLog(props) {
    var route = (0, native_1.useRoute)();
    console.log(props);
    return (<react_native_1.View style={styles.container}>
            <react_native_1.FlatList data={props.log} keyExtractor={function (item) { return item.id; }} renderItem={function (_a) {
            var item = _a.item;
            return (<ChatBubble_1["default"] item={item} route={route}/>);
        }}/>
        </react_native_1.View>);
}
exports["default"] = ChatLog;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 8,
        borderWidth: 1,
        backgroundColor: 'lightblue',
        width: '100%'
    },
    client: {
        alignItems: 'flex-end',
        backgroundColor: 'gray',
        margin: 5,
        padding: 55
    },
    notClient: {
        alignItems: 'flex-start',
        backgroundColor: 'gold',
        margin: 5
    }
});

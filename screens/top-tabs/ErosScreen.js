import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import DisplayMatches from '../../components/home/DisplayMatches';


//TODO: wrap JSON data in API endpoints 
export default function ErosScreen() {
    const data = require('../../data/matches.json')
    console.log(data['eros-matches'])

    return (
        <View style={styles.container}>
            <Text>For Love</Text>
            <DisplayMatches matches={data['eros-matches']} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
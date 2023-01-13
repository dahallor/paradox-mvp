import { StyleSheet, Text, View } from 'react-native';
import Title from './Title'
import List from './List'
import Checklist from './Checkbox';

export default function SetupCard() {
    return (
        <View style={styles.container}>
            <Title />
            <List />
            <Checklist />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
)
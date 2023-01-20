//DEPRICATED









import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native';
import ErosScreen from '../../screens/ErosScreen';
import LudosScreen from '../../screens/LudosScreen';
import PhilaScreen from '../../screens/PhilaScreen';


//TODO: depricated. I want to extract to here but tabs cant pass back functions. If i find a work around abstract it here

const Tab = createMaterialTopTabNavigator();

export default function TopTabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Eros" component={ErosScreen} />
            <Tab.Screen name="Ludos" component={LudosScreen} />
            <Tab.Screen name="Phila" component={PhilaScreen} />
        </Tab.Navigator>
    );
}
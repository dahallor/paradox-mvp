import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ErosScreen from '../../screens/ErosScreen';
import LudosScreen from '../../screens/LudosScreen';
import PhilaScreen from '../../screens/PhilaScreen';


//TODO: add component to naivagator

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
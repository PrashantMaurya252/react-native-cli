import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';

type BottomTabParamList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
};

console.log('importing tab screen1', TabScreen1);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const TabNavigationDemo: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TabScreen1" component={TabScreen1} />
      <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
    </BottomTab.Navigator>
  );
};

export default TabNavigationDemo;

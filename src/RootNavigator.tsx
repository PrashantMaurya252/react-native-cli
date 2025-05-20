import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
import TabNavigationDemo from './components/Tab/TabNavigationDemo';
import DrawerNavigationDemo from './components/drawer/DrawerNavigationDemo';
import TouchableScreen from './screens/TouchableScreen';

export type RootStackParamsList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
  TouchableDemo: undefined;
};
const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo} />
      <Stack.Screen name="TouchableDemo" component={TouchableScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

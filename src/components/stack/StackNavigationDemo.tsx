import {createStackNavigator} from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';
import {Text, View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen';

export type StackDemoParamList = {
  StackScreen1: undefined;
  StackScreen2: {
    itemId: number;
  };
};
const Stack = createStackNavigator<StackDemoParamList>();

const StackNavigationDemo: React.FC = () => {
  console.log('HomeScreen', HomeScreen);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Stack Screen One'}}
        name="StackScreen1"
        component={StackScreen1}
        // component={() => (
        //   <View>
        //     <Text>Inline Text Navigation Screen 1</Text>
        //   </View>
        // )}
      />
      <Stack.Screen
        options={({route}) => ({title: `Item ${route.params.itemId}`})}
        name="StackScreen2"
        component={StackScreen2}
        // component={() => (
        //   <View>
        //     <Text>Inline Text Navigation Screen 2</Text>
        //   </View>
        // )}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';

export type RootStackParamList = {
  Home: undefined;
  FlatListScreen: undefined;
  SectionListScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

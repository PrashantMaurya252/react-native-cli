import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import TouchableScreen from './TouchableScreen';
import ModalScreen from './ModalScreen';
import PullToRefreshScreen from './PullToRefreshScreen';

export type RootStackParamList = {
  Home: undefined;
  FlatListScreen: undefined;
  SectionListScreen: undefined;
  TouchableDemo: undefined;
  ModalDemo: undefined;
  PullToRefreshDemo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="TouchableDemo" component={TouchableScreen} />
      <Stack.Screen name="ModalDemo" component={ModalScreen} />
      <Stack.Screen name="PullToRefreshDemo" component={PullToRefreshScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import TouchableScreen from './TouchableScreen';
import ModalScreen from './ModalScreen';
import PullToRefreshScreen from './PullToRefreshScreen';
import DataFetching from './DataFetching';
import AxiosScreen from './AxiosScreen';
import ThemeScreen from './ThemeScreen';
import BasicAnimationDemo from './BasicAnimationDemo';
import Interpolation from './Interpolation';
import CombinedAnimation from './CombinedAnimation';
import GestureAnimation from './GestureAnimation';
import CoreConcept from './reanimated/CoreConcepts';
import ReanimationTypes from './reanimated/ReanimationTypes';
import ReanimationGesture from './reanimated/ReanimationGesture';

export type RootStackParamList = {
  Home: undefined;
  FlatListScreen: undefined;
  SectionListScreen: undefined;
  TouchableDemo: undefined;
  ModalDemo: undefined;
  PullToRefreshDemo: undefined;
  FetchDemo: undefined;
  AxiosDemo: undefined;
  ThemeToggleDemo: undefined;
  BasicAnimationDemo: undefined;
  Interploation: undefined;
  CombinedAnimation: undefined;
  GestureDemo: undefined;
  ReanimatedCore: undefined;
  ReanimationTypes: undefined;
  ReanimationGesture: undefined;
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
      <Stack.Screen name="FetchDemo" component={DataFetching} />
      <Stack.Screen name="AxiosDemo" component={AxiosScreen} />
      <Stack.Screen name="ThemeToggleDemo" component={ThemeScreen} />
      <Stack.Screen name="BasicAnimationDemo" component={BasicAnimationDemo} />
      <Stack.Screen name="Interploation" component={Interpolation} />
      <Stack.Screen name="CombinedAnimation" component={CombinedAnimation} />
      <Stack.Screen name="GestureDemo" component={GestureAnimation} />
      <Stack.Screen name="ReanimatedCore" component={CoreConcept} />
      <Stack.Screen name="ReanimationTypes" component={ReanimationTypes} />
      <Stack.Screen name="ReanimationGesture" component={ReanimationGesture} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

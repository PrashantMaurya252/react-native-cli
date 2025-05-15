import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {StackDemoParamList} from './StackNavigationDemo';
import React from 'react';

type StackScreen2NavigationProp = StackNavigationProp<
  StackDemoParamList,
  'StackScreen2'
>;

type StackScreen2RouteProp = RouteProp<StackDemoParamList, 'StackScreen2'>;
const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProp>();
  const route = useRoute<StackScreen2RouteProp>();
  return (
    <View>
      <Text>Stack Screen 2</Text>
      <Text>Item ID: {route.params.itemId}</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back to Stack Screen 1"
      />
    </View>
  );
};

console.log('Stack Screen 2 exporting', StackScreen2);

export default StackScreen2;

import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {StackDemoParamList} from './StackNavigationDemo';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

type StackScreen1NavigationProp = StackNavigationProp<
  StackDemoParamList,
  'StackScreen1'
>;
const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProp>();
  return (
    <View>
      <Text>Stack Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('StackScreen2', {itemId: 160})}
        title="Go to Navigation Screen 2"
      />
    </View>
  );
};

console.log('Stack Screen exporting', StackScreen1);

export default StackScreen1;

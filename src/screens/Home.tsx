import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from './RootNavigation';

const topics = [
  {
    id: 1,
    title: 'Flat list demo',
    screen: 'FlatListScreen',
  },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button
        title="Flat List Demo"
        onPress={() => navigation.navigate('FlatListScreen')}
      />
    </View>
  );
};

export default Home;

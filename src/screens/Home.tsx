import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from './RootNavigation';

const topics = [
  {
    id: 1,
    title: 'Flat list demo',
    screen: 'FlatListScreen',
  },
  {
    id: 2,
    title: 'Section list demo',
    screen: 'SectionListScreen',
  },
  {
    id: 3,
    title: 'Touchable Demo',
    screen: 'TouchableDemo',
  },
  {
    id: 4,
    title: 'Modal Demo',
    screen: 'ModalDemo',
  },
  {
    id: 5,
    title: 'Pull To Refresh Demo',
    screen: 'PullToRefreshDemo',
  },
  {
    id: 6,
    title: 'Fetch API Demo',
    screen: 'FetchDemo',
  },
  {
    id: 7,
    title: 'Axios API Demo',
    screen: 'AxiosDemo',
  },
  {
    id: 8,
    title: 'Theme Toggle Demo',
    screen: 'ThemeToggleDemo',
  },
  {
    id: 9,
    title: 'Basic Animation Demo',
    screen: 'BasicAnimationDemo',
  },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  //   const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      {/* <Button
        title="Flat List Demo"
        onPress={() => navigation.navigate('FlatListScreen')}
      /> */}
      <FlatList
        data={topics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.topicButton}
            onPress={() =>
              navigation.navigate(item.screen as keyof RootStackParamList)
            }>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  topicButton: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  topicText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;

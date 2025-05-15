import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../RootNavigator';
import StackScreen1 from '../components/stack/StackScreen1';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  console.log('Stack Screen 1 Home.tsx', StackScreen1);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Stack Navigation Demo"
        onPress={() => navigation.navigate('StackDemo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default HomeScreen;

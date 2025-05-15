import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {Button, Text, View} from 'react-native';

type DrawerParamList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

type DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen1'>;
};

type DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen2'>;
};

const DrawerScreen1: React.FC<DrawerScreen1Props> = ({navigation}) => {
  return (
    <View>
      <Text>Drawer Screen 1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const DrawerScreen2: React.FC<DrawerScreen1Props> = ({navigation}) => {
  return (
    <View>
      <Text>Drawer Screen 2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const DrawerNavigationDemo: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;

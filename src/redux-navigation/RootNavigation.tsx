import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TaskList from '../screens/redux/TaskList';
import Projects from '../screens/redux/Projects';

const Tab = createBottomTabNavigator();

const ReduxRootNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={TaskList} />
      <Tab.Screen name="Projects" component={Projects} />
    </Tab.Navigator>
  );
};

export default ReduxRootNavigation;

import {StyleSheet, Text, View} from 'react-native';

const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tasklist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default TaskList;

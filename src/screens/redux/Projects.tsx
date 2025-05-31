import {StyleSheet, Text, View} from 'react-native';

const Projects: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Projects</Text>
      <Text style={styles.homeWork}>Projects</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  homeWork: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Projects;

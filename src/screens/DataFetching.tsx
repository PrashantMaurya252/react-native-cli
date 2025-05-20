import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DataFetching: React.FC = () => {
  const [data, setData] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Data Fetching using Fetch API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DataFetching;

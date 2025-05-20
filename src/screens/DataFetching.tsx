import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Post {
  id: number;
  title: string;
}

const DataFetching: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data: Post[] = await response.json();
      if (data) {
        setData(data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchListPost();
  }, []);

  console.log(data);
  const renderItem = ({item}: {item: Post}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Data Fetching using Fetch API</Text>
      {loading ? (
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
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
  item: {
    backgroundColor: '#c6df0a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DataFetching;

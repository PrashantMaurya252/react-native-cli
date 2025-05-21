import axios from 'axios';
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

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// request
api.interceptors.request.use(config => {
  console.log('Request Sent : ', config);
  return config;
});

// response
api.interceptors.response.use(response => {
  console.log('Request Received : ', response);
  return response;
});

const AxiosScreen: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListPost = async () => {
    try {
      setLoading(true);
      const response = await api.get<Post[]>('/posts');
      if (response) {
        setData(response.data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data, 'axios');

  useEffect(() => {
    fetchListPost();
  }, []);

  const renderItem = ({item}: {item: Post}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Axios Screen</Text>
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

export default AxiosScreen;

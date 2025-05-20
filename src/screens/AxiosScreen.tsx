import axios from 'axios';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Axios Screen</Text>
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

export default AxiosScreen;

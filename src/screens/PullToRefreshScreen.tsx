import {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const INITIAL_DATA = Array.from({length: 20}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const PullToRefreshScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const loadMoreItems = () => {
    if (!loading) {
      setLoading(true);
      // load more items
      setTimeout(() => {
        const newItems = Array.from({length: 10}, (_, index) => ({
          id: (data.length + index).toString(),
          title: `Item ${data.length + index + 1}`,
        }));
        setData([...data, ...newItems]);
        setLoading(false);
      }, 1000);
    }
  };

  const handleOnRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(INITIAL_DATA);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Large List with pull to refresh and infinite Scrolling
      </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderItem}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              style={styles.loader}
              size={'large'}
              color={'#0000ff'}
            />
          ) : null
        }
      />
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: 20,
  },
});

export default PullToRefreshScreen;

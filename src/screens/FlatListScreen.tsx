import {FlatList, StyleSheet, Text, View} from 'react-native';

// sample data /data from api

const FLAT_DATA = Array.from({length: 50}, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const FlatListScreen: React.FC = () => {
  const handleRenderItem = ({item}: {item: {id: string; title: string}}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title} Prashant</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flat list example</Text>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.flatListHeader}>FlatList Header</Text>
        }
        ListFooterComponent={
          <Text style={styles.flatListFooter}>FlatList Footer</Text>
        }
        data={FLAT_DATA}
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  flatListHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  flatListFooter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
  },
});

export default FlatListScreen;

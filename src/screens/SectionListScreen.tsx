import {SectionList, StyleSheet, Text, View} from 'react-native';

const SectionListScreen: React.FC = () => {
  const SECTION_DATA = [
    {
      title: 'Men',
      data: ['Mens Tshirt 1', 'Mens Shirt 1', 'Jeans'],
    },
    {
      title: 'Women',
      data: ['Women Tshirt 1', 'Women Shirt 1', 'Women Jeans'],
    },
    {
      title: 'Kids',
      data: ['Kids Tshirt 1', 'Kids Shirt 1', 'Kids Jeans'],
    },

    {
      title: 'Watches',
      data: ['Watch 1', 'Watch 2', 'Watch 3'],
    },
  ];

  const handleRenderItem = ({item}: {item: string}) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section list component</Text>
      <SectionList
        renderSectionHeader={renderSectionHeader}
        sections={SECTION_DATA}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => item + index}
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;

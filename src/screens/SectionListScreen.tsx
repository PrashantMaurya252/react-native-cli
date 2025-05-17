import {SectionList, Text, View} from 'react-native';

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
  ];

  const handleRenderItem = ({item}: {item: string}) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View>
      <Text>Section list component</Text>
      <SectionList
        renderSectionHeader={renderSectionHeader}
        sections={SECTION_DATA}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

export default SectionListScreen;

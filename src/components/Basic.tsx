import {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const Basic = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      {/* View Component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>

      {/* Text Component */}

      <Text style={styles.myFirstText}>My First React Native Course</Text>
      <Text style={styles.nestedText}>
        Text components can be <Text style={styles.bold}>nested</Text>
      </Text>

      {/* Image */}

      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1746058370002-3f4732cf3ce7?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        }}
      />

      <Image style={styles.image} source={require('../../assets/image.jpg')} />

      {/* Button Component */}

      <Button
        color={'red'}
        disabled={true}
        title="Click Me"
        onPress={() => setCount(count + 1)}
      />
      <Text>Count is {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontWeight: '900',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  myFirstText: {
    fontSize: 30,
  },
  nestedText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 30,
  },
});

export default Basic;

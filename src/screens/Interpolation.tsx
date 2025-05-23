import {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

const Interpolation: React.FC = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const handleStartAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start(() => animation.setValue(0));
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#e81212', '#cce812', '#1248e8'],
  });

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Interpolation Demo</Text>
      <Animated.View
        style={[styles.box, {backgroundColor, transform: [{rotate}]}]}>
        <Text style={styles.boxText}>Interpolate Me!</Text>
      </Animated.View>
      <Button title="Start Animation here" onPress={handleStartAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: 'red',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Interpolation;

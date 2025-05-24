import {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';

const GestureAnimation: React.FC = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Gesture Animation Demo</Text>
      <Text style={styles.headerText}>Drag the box</Text>

      <Animated.View
        style={[styles.box, pan.getLayout()]}
        {...panResponder.panHandlers}>
        <Text style={styles.boxText}>Drag Me</Text>
      </Animated.View>
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
    backgroundColor: '#18da22',
  },
  boxText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GestureAnimation;

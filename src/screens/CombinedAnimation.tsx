import {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const CombinedAnimation: React.FC = () => {
  const moveAndRotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const combinedAnimation = () => {
    moveAndRotateAnim.setValue(0);
    Animated.timing(moveAndRotateAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  const pulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Combined Animation Demo</Text>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: moveX,
              },
              {
                translateY: moveY,
              },
              {
                rotate: rotate,
              },
              {
                scale: pulseAnimation,
              },
            ],
          },
        ]}></Animated.View>
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
});

export default CombinedAnimation;

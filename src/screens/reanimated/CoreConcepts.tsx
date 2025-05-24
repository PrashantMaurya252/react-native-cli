import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const CoreConcept: React.FC = () => {
  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);

  const opacity = useDerivedValue(() => {
    return Math.sin((rotation.value * Math.PI) / 180) / 2 + 0.5;
  });

  const animatedRef = useAnimatedRef<Animated.View>();

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
        {
          rotate: `${rotation.value}deg`,
        },
        {
          scale: scale.value,
        },
      ],
      opacity: opacity.value,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: 1 / scale.value,
        },
      ],
    };
  });
  const handleStartAnimation = () => {
    offset.value = withSpring(Math.random() * 200 - 100);
    rotation.value = withRepeat(
      withTiming(360, {duration: 2000, easing: Easing.linear}),
      -1,
      false,
    );

    scale.value = withRepeat(withTiming(1.5, {duration: 1000}), -1, true);
  };

  const handleStopAnimation = () => {
    cancelAnimation(offset);
    cancelAnimation(rotation);
    cancelAnimation(scale);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>React Animated Core Concepts</Text>
      <Animated.View style={[styles.box, boxStyle]} ref={animatedRef}>
        <Animated.Text style={[styles.boxText, textStyle]}>
          Animated Box
        </Animated.Text>
      </Animated.View>
      <View style={styles.btnContainer}>
        <Pressable onPress={handleStartAnimation} style={styles.btn}>
          <Text style={styles.btnText}>Start Animation</Text>
        </Pressable>
        <Pressable onPress={handleStopAnimation} style={styles.btn}>
          <Text style={styles.btnText}>Stop Animation</Text>
        </Pressable>
      </View>
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
    width: 150,
    height: 150,
    backgroundColor: '#1d31e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  btnContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#0ebc05',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CoreConcept;

import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReanimationTypes: React.FC = () => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          scale: scale.value,
        },
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  // timing animation

  const handleTimingAnimation = () => {
    translateX.value = withTiming(150, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
  };

  // reset
  const handleResetAnimation = () => {
    translateX.value = withTiming(0);
    scale.value = withTiming(1);
  };

  // Spring Animation

  const handleSpringAnimation = () => {
    scale.value = withSpring(1.5, {
      damping: 10,
      stiffness: 100,
    });
  };

  // decay animation

  const handleDecayAnimation = () => {
    translateX.value = withDecay({
      velocity: 200,
      clamp: [0, 300],
    });
  };

  // Sequence Animation

  const handleSequenceAnimation = () => {
    rotate.value = withSequence(
      withTiming(180, {duration: 1000}),
      withTiming(0, {duration: 1000}),
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reanimation Types</Text>
      <Animated.View style={[styles.box, boxStyle]}></Animated.View>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={handleTimingAnimation}>
          <Text style={styles.btnText}>Timing</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSpringAnimation}>
          <Text style={styles.btnText}>Spring</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDecayAnimation}>
          <Text style={styles.btnText}>Decay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSequenceAnimation}>
          <Text style={styles.btnText}>Sequence</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Repeat</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Delay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleResetAnimation}>
          <Text style={styles.btnText}>Reset</Text>
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
    justifyContent: 'center',
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
  btnContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
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

export default ReanimationTypes;

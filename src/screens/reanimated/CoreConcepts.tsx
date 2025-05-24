import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedRef,
  useSharedValue,
} from 'react-native-reanimated';

const CoreConcept: React.FC = () => {
  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedRef = useAnimatedRef<Animated.View>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>React Animated Core Concepts</Text>
      <Animated.View style={[styles.box]} ref={animatedRef}>
        <Animated.Text style={styles.boxText}>Animated Box</Animated.Text>
      </Animated.View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Start Animation</Text>
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

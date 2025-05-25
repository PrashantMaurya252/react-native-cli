import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

const ReanimationTypes: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reanimation Types</Text>
      <Animated.View style={[styles.box]}></Animated.View>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Spring</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Decay</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Sequence</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Repeat</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Delay</Text>
        </Pressable>
        <Pressable style={styles.btn}>
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

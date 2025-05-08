import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

function Touchable() {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highLightCount, setHighLightCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Components</Text>
      <TouchableOpacity
        onPress={() => setOpacityCount(opacityCount + 1)}
        style={styles.button}>
        <Text style={styles.btnText}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        underlayColor={'red'}
        onPress={() => setHighLightCount(highLightCount + 0.01)}>
        <Text style={styles.btnText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Touchable;

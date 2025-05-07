import {StyleSheet, Text, View} from 'react-native';

function StylingDemo() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#ffffff',
          }}>
          Inlining Styling Example
        </Text>
      </View>
      <View
        style={[styles.combinedStyle, {borderWidth: 2, borderColor: 'purple'}]}>
        <Text style={[styles.combinedText, {textDecorationLine: 'underline'}]}>
          Combined Text Property
        </Text>
        <Text style={[styles.combinedText, {textDecorationLine: 'underline',color:'red',fontWeight:'bold'}]}>
          Combined Text Property with different Color
        </Text>
      </View>

      <View
        style={[styles.combinedStyle, {borderWidth: 2, borderColor: 'purple'}]}>
        <Text style={[styles.combinedText, {textDecorationLine: 'underline',color:'red',fontWeight:'bold'}]}>
          Combined Text Property with different Color
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  combinedStyle: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  combinedText: {
    fontSize: 14,
  },
});

export default StylingDemo;

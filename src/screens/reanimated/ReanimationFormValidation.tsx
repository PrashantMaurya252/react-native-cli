import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Animated from 'react-native-reanimated';

const ReanimationFormValidation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer]}>
        <TextInput
          style={styles.inputComp}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Animated.View style={[styles.checkMark]}>
          <Text style={styles.checkMarkText}></Text>
        </Animated.View>
      </Animated.View>

      <Animated.Text style={[styles.errorText]}>Email Error</Animated.Text>

      <Animated.View style={[styles.inputContainer]}>
        <TextInput
          style={styles.inputComp}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
        />

        <Animated.View style={[styles.checkMark]}>
          <Text style={styles.checkMarkText}></Text>
        </Animated.View>
      </Animated.View>

      <Animated.Text style={[styles.errorText]}>Password Error</Animated.Text>

      <Pressable>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  inputComp: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  checkMark: {
    position: 'absolute',
    right: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkMarkText: {
    color: '#40ad44',
    fontSize: 16,
    fontWeight: 'bold',
  },

  errorText: {
    color: '#ff5255',
    fontSize: 12,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});

export default ReanimationFormValidation;

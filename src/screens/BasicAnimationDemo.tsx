import {useRef} from 'react';
import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const BasicAnimationDemo: React.FC = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const handleFadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleFadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleTranslate = () => {
    Animated.timing(translateAnim, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };

  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 3,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Basic Animation Demo</Text>
      <Text style={styles.headerText}>Fade In & Fade Out Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.fadeBox,
            {opacity: fadeAnimation},
          ]}></Animated.View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleFadeIn} title="Fade In" />
          <Button onPress={handleFadeOut} title="Fade Out" />
        </View>
      </View>

      {/* Translation Demo */}
      <Text style={styles.headerText}>Translation Demo</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.translateBox,
            {
              transform: [
                {
                  translateX: translateAnim,
                },
              ],
            },
          ]}></Animated.View>
        <Button title="Translate" onPress={handleTranslate} />
      </View>

      {/* Scale Demo */}
      <Text style={styles.headerText}>Scale Demo</Text>
      <Animated.View
        style={[
          styles.box,
          styles.scaleBox,
          {
            transform: [
              {
                scale: scaleAnimation,
              },
            ],
          },
        ]}></Animated.View>
      <Button title="Translate" onPress={handleScale} />
    </ScrollView>
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
  demoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
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
  fadeBox: {
    backgroundColor: '#3498db',
  },
  translateBox: {
    backgroundColor: '#3498db',
  },
  scaleBox: {
    backgroundColor: '#350bb1',
  },
});
export default BasicAnimationDemo;

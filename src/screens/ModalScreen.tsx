import {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ModalScreen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modal Demo</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowModal(!showModal)}>
        <Text style={styles.btnText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent={true}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>Modal Component</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowModal(false)}>
              <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    padding: 10,
    backgroundColor: '#4ca008',
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 250,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalScreen;

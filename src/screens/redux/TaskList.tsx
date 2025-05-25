import {useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TaskList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  return (
    <View style={styles.container}>
      {/* render list of tasks here */}
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <KeyboardAvoidingView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Task</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  addBtn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#6200ee',
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  addBtnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxWidth: 300,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default TaskList;

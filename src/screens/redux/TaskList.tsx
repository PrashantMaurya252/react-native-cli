import {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {
  addTask,
  deleteTask,
  fetchTasks,
  Task,
  toggleTask,
} from '../../store/taskSlice';
import Animated, {
  FadeInRight,
  FadeOutRight,
  Layout,
} from 'react-native-reanimated';

const TaskList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log('taskList', tasks);

  const status = useSelector((state: RootState) => state.tasks.status);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTasks());
  }, [status, dispatch]);

  const handleAddNewTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(
        addTask({
          title: newTaskTitle.trim(),
          completed: false,
        }),
      );

      setNewTaskTitle('');
      setIsModalVisible(false);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    Alert.alert(
      'Delete Task',
      'Are you sure that you want to delete the task ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => dispatch(deleteTask(taskId)),
        },
      ],
    );
  };

  const createRenderTask = ({item}: {item: Task}) => (
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutRight}
      layout={Layout.springify()}>
      <TouchableOpacity
        onPress={() => dispatch(toggleTask(item.id))}
        style={[styles.taskItem, item.completed && styles.completedTask]}>
        <Text
          style={[
            styles.taskItemText,
            item.completed && styles.completedTaskitemText,
          ]}>
          {item.title}
        </Text>
        <TouchableOpacity
          style={styles.deleteTaskButton}
          onPress={() => handleDeleteTask(item.id)}>
          <Text style={styles.deleteTaskButtonText}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* render list of tasks here */}
      <FlatList
        data={tasks}
        renderItem={createRenderTask}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setIsModalVisible(true)}>
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
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.closeBtnText}>Close</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              placeholder="Enter Task Title"
              placeholderTextColor="#999999"
              autoFocus
            />
            <View style={styles.modalButton}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.cancelBtn]}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.closeBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleAddNewTask}
                style={[styles.modalBtn, styles.submitBtn]}>
                <Text style={styles.closeBtnText}>Add Task</Text>
              </TouchableOpacity>
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
  closeBtn: {
    backgroundColor: '#6200ee',

    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 4,
    padding: 12,
  },
  closeBtnText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginLeft: 10,
  },
  cancelBtn: {
    backgroundColor: '#d37c09',
  },
  submitBtn: {
    backgroundColor: '#b912a3',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  completedTask: {
    opacity: 0.7,
  },
  taskItemText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  completedTaskitemText: {
    textDecorationLine: 'line-through',
  },
  deleteTaskButton: {
    backgroundColor: '#d37c09',
    padding: 12,
    borderRadius: 25,
  },
  deleteTaskButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default TaskList;

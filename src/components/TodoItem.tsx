import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Todo} from '../types';
import {useState} from 'react';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return <TodoEdit todo={todo} onSave={handleEdit} onCancel={handleCancel} />;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText} onPress={onToggle}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            if (todo.completed) {
              Alert.alert('info', 'This todo is already completed');
              return;
            }
            setIsEditing(true);
          }}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  editBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteBtn: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default TodoItem;

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add a new Todo"
      />
      <TouchableOpacity style={styles.addTodoBtn}>
        <Text style={styles.addTodoBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  addTodoBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoInput;

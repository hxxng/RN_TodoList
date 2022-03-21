import React, {useState} from 'react';
import Title from './components/Title';
import InputText from './components/InputText';
import Btn from './components/Btn';
import TodoList from './components/TodoList';

import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const App: () => Node = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    1: {id: '1', text: 'todo list 1'},
    2: {id: '2', text: 'todo list 2'},
    3: {id: '3', text: 'todo list 3'},
  });

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: newTask},
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject});
  };

  //삭제 함수
  const _deleteTask = id => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  //수정 함수
  const _updateTask = item => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  };

  const _handleTextChange = text => {
    setNewTask(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="Todo List ✔️"></Title>
      <View style={styles.input}>
        <InputText
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <Btn type={'등록'} onPressOut={_addTask} />
      </View>
      <ScrollView>
        {Object.values(tasks)
          .reverse()
          .map(item => (
            <TodoList
              key={item.id}
              item={item}
              deleteTask={_deleteTask}
              updateTask={_updateTask}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 10,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;

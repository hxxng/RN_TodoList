import React, {useState} from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';
import Btn from './Btn';
import InputText from './InputText';

const TodoList = ({item, deleteTask, updateTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);
  const _handleUpdateButtonPress = () => {
    setIsEditing(true);
  };
  const _handleCancleButtonPress = () => {
    setIsEditing(false);
  };
  const _onSubmitEditing = () => {
    if (isEditing) {
      const editedTask = Object.assign({}, item, {text});
      setIsEditing(false);
      updateTask(editedTask);
    }
  };

  return isEditing ? (
    <View style={styles.container}>
      <InputText
        value={text}
        onChangeText={text => setText(text)}
        onSubmitEditing={_onSubmitEditing}
      />
      <Btn type={'수정'} onPressOut={_onSubmitEditing} />
      <Btn type={'취소'} onPressOut={_handleCancleButtonPress} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>{item.text}</Text>
      <Btn type={'수정'} onPressOut={_handleUpdateButtonPress} />
      <Btn type={'삭제'} id={item.id} onPressOut={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 10,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    width: 250,
    fontSize: 18,
  },
});

export default TodoList;

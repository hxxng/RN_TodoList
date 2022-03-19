import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Btn = ({type, onPressOut, id}) => {
  Btn.defaultProps = {
    onPressOut: () => {},
  };
  const _onPressOut = () => {
    onPressOut(id);
  };
  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
      <Text>{type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderRadius: 5,
    marginRight: 2,
    height: 40,
    width: 50,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Btn;

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

const GoalInput = ({ addGoal, onCancel, visible }) => {
  const [enterdFoalText, setEnterdFoalText] = useState('');

  const goalInputHandler = (enterdText) => {
    setEnterdFoalText(enterdText)
  }
  const goalSubmitHandler = () => {
    addGoal(enterdFoalText)
  }


  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput placeholder='Your Currse Goals' style={styles.textInput} onChangeText={goalInputHandler} value={enterdFoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color={'#f31282'} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={goalSubmitHandler} color={"#5e0acc"} />
          </View>
        </View>
      </View>
    </Modal>

  );
};

export default GoalInput;


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})
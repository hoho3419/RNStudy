import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = ({ id, text, onDelete }) => {

  return (
    <View style={styles.goalItem}>
      <Pressable onPress={onDelete.bind(this, id)} android_ripple={{ color: "#ffffff" }}
        style={({ pressed }) => pressed && styles.pressedItem} // pressed가 시작되면 뒤에 스타일링을 입혀라 라는 구문
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
})
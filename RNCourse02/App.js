import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enterdgoalText) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enterdgoalText, id: Math.random().toString() }]);
    setModalIsVisible(false);
  }
  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  // div 사용 불가능
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add NEw Goal' color={'#5e0acc'} onPress={startAddGoalHandler} />
        <GoalInput addGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        {/* <View style={styles.inputContainer}>
        <TextInput placeholder='Your Currse Goals' style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View> */}
        <View style={styles.goalsContainer}>
          {/* <ScrollView >
          {courseGoals.map((goal, idx) => (
            <View key={idx} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList data={courseGoals} renderItem={(itemData) => { // FlatList는 데이터를 전달할때 key 속성이 있으면 알아서 찾아서 사용한다
            return <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id} key={itemData.item.id} />
          }}
            keyExtractor={(item) => { // 키를 임의로 지정하는법
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  },
});

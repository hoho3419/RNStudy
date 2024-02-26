import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minnumBoundary = 1;
let maxnumBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initalGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guessRounds, setGuessRounds] = useState([initalGuess]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessRounds.length)
    }
  }, [userNumber, currentGuess, onGameOver])

  useEffect(() => {
    minnumBoundary = 0;
    maxnumBoundary = 100;
  }, [])

  const nextGuess = (direction) => {
    if ((direction === 'lower' && userNumber > currentGuess) || (direction === 'greater' && userNumber < currentGuess)) {
      Alert.alert("잘못된 정보", "거짓말은 나빠요", [{ text: "미안", style: 'cancel' }])
      return;
    }

    if (direction === 'lower') {
      maxnumBoundary = currentGuess;
    } else {
      minnumBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minnumBoundary, maxnumBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(pre => [newRndNumber, ...pre])
  }

  const flatListLogLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>높을까 낮을까?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "lower")}><Ionicons name='md-remove' size={24} color={'white'} /></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "greater")}><Ionicons name='md-add' size={24} color={'white'} /></PrimaryButton>
          </View>
        </View>
      </Card>
    </>)

  if (width > 500) {
    content = (
      <>
        {/* <InstructionText style={styles.instructionText}>높을까 낮을까?</InstructionText> */}
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "lower")}><Ionicons name='md-remove' size={24} color={'white'} /></PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "greater")}><Ionicons name='md-add' size={24} color={'white'} /></PrimaryButton>
          </View>
        </View>
      </>)
  }
  return (
    <View style={styles.screen}>
      <Title>번호 맞추기</Title>
      {content}
      <View style={{ flex: 1, padding: 16 }}>
        {/* {guessRounds.map(el => <Text key={el}>{el}</Text>)} */}
        <FlatList data={guessRounds} renderItem={({ item, index }) => <GuessLogItem guess={item} roundNumber={flatListLogLength - index} />} keyExtractor={(item) => item} />
      </View>
    </View>
  );
};

export default GameScreen;



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
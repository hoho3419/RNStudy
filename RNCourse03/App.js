import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';
// import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  if (!fontsLoaded) {
    return null; // 폰트 로딩 중에는 앱 렌더링을 하지 않음
  }

  const pickedNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  const gameOver = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }
  const startNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumber} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOver} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRounds} onStartNewGame={startNewGame} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.primary800, Colors.accent500]}
        style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backGroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          {/* <StartGameScreen onPickNumber={pickedNumber} /> */}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15
  }
});

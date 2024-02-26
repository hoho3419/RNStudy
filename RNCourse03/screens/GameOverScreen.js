import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imgagSize = 300;

  if (width < 380) {
    imgagSize = 150;
  }

  if (height < 400) {
    imgagSize = 80;
  }
  const imageStyle = {
    width: imgagSize,
    height: imgagSize,
    borderRadius: imgagSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>게임 종료!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image source={require("../assets/images/success.png")} style={styles.image} />
        </View>
        <Text style={styles.summaryText}>당신의 휴대폰은 <Text style={styles.highlight}>{roundNumber}</Text>  번 라운드만에 숫자 <Text style={styles.highlight}> {userNumber}</Text> 를 맞췄습니다.</Text>
        <PrimaryButton onPress={onStartNewGame}>새 게임 시작하기</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary800
  }
})
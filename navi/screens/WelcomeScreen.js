import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>여기는 <Text style={styles.highLight}>Welcome</Text> 페이지 입니다.</Text>
    </View>
  );
};

export default WelcomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highLight: {
    color: 'red'
  }
});

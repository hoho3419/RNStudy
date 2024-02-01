
import { StyleSheet, Text, View } from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text>여기는 <Text style={styles.highLight}>User</Text> 페이지 입니다.</Text>
    </View>
  );
};

export default UserScreen;



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

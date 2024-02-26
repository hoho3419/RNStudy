import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
};

export default Title;


const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: "center",
    borderWidth: 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})
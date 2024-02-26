import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        // style 에서 pressed는 사용자가 현재 컴포넌트를 클릭 했을때 true 가 되기 때문에 클릭 했을때 스타일을 중복으로 적용하는 구문 
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75,

  }
})
import { StyleSheet, View, Text, Pressable } from "react-native";

const Button = ({ onPress, title, filled = true }) => (
  <Pressable onPress={onPress}>
    <View
      style={[styles.buttonContainer, filled && styles.filledButtonContainer]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </Pressable>
);

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderRadius: 16,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
  },
  filledButtonContainer: {
    backgroundColor: "#FFDFD6",
    borderColor: "#FFDFD6",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

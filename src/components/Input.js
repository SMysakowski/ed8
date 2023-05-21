import { TextInput, StyleSheet } from "react-native";

const getInputStyle = ({ isError, contained }) => {
  if (isError) {
    return [styles.input, styles.inputError];
  } else if (contained) {
    return [styles.input, styles.contained];
  } else {
    return styles.input;
  }
};

const Input = ({ isError, textInputRef, contained, ...rest }) => (
  <TextInput
    placeholderTextColor={contained && "#6D6D78"}
    ref={textInputRef}
    style={getInputStyle({ isError, contained })}
    {...rest}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: "#6D6D78",
    borderWidth: 1,
    marginVertical: 4,
    padding: 12,
    paddingVertical: 18,
    borderRadius: 12,
    width: "100%",
  },
  inputError: {
    borderColor: "red",
  },
  contained: {
    backgroundColor: "#F9F9F9",
    borderColor: "#F9F9F9",
  },
});

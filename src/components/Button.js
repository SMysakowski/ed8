import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

import { styles } from "./Button.styles";

const MyCustomHighlightButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      underlayColor={"yellow"}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text>Click me</Text>
      </View>
    </TouchableHighlight>
  );
};

const MyCustomOpacityButton = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text>Click me</Text>
      </View>
    </TouchableOpacity>
  );
};

const MyCustomButtonWithoutFeedback = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text>Click me</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const MyPressableButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text>Click me</Text>
      </View>
    </Pressable>
  );
};

export {
  MyCustomButtonWithoutFeedback,
  MyCustomHighlightButton,
  MyCustomOpacityButton,
  MyPressableButton,
};

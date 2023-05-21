import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

import PinterestLogo from "../../../../assets/Pinterest-logo.png";

export const Task2 = () => {
  return (
    <View>
      <Text>Sebastian Mysakowski</Text>
    </View>
  );
};

export const Task3 = () => {
  return (
    <View style={styles.rootView}>
      <Text>Sebastian Mysakowski</Text>
    </View>
  );
};

export const Task4 = () => {
  return (
    <View style={styles.rootView}>
      <Text>
        Sebastian <Text style={styles.surname}>Mysakowski</Text>
      </Text>
    </View>
  );
};

export const Task5 = () => {
  return (
    <View style={styles.rootView}>
      <Image source={PinterestLogo} style={styles.image} />
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        }}
      />
    </View>
  );
};
export const Task6 = () => {
  const onPress = () => {
    Alert.alert("Hello World");
  };

  const IconButton = ({ children }) => (
    <Pressable onPress={onPress}>{children}</Pressable>
  );

  return (
    <View style={styles.rootView}>
      <IconButton>
        <Image source={PinterestLogo} style={styles.image} />
      </IconButton>
      <IconButton>
        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
          }}
        />
      </IconButton>
      <IconButton>
        <Feather name="zap" size={48} color={"#000"} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  surname: {
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export const getTaskComponent = (taskNumber) => {
  switch (taskNumber) {
    case 2:
      return Task2;
    case 3:
      return Task3;
    case 4:
      return Task4;
    case 5:
      return Task5;
    case 6:
      return Task6;
    default:
      throw new Error(`Task ${taskNumber} not found`);
  }
};

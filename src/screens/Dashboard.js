import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

import Button from "../components/Button";

import LottieAnimation from "../../assets/animations/badge.json";

export default function Dashboard({ navigation }) {
  const handleNavigateToPosts = () => {
    navigation.navigate("Posts");
  };

  const handleNavigateToUsers = () => {
    navigation.navigate("Users");
  };

  const handleNavigateToNotes = () => {
    navigation.navigate("Notes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <View style={styles.animationContainer}>
        <LottieView
          source={LottieAnimation}
          style={styles.lottieView}
          autoPlay
          autoSize
          loop={false}
        />
      </View>
      <Button title="Posts" onPress={handleNavigateToPosts} />
      <Button title="Users" onPress={handleNavigateToUsers} />
      <Button title="Notes" onPress={handleNavigateToNotes} />
      <Button title="Logout" onPress={navigation.goBack} filled={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 16,
  },
  container: {
    paddingHorizontal: 32,
  },
  lottieView: {
    width: 200,
    height: 200,
  },
  animationContainer: {
    alignItems: "center",
  },
});

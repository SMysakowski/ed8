import { View, StyleSheet, Text } from "react-native";

import Button from "../components/Button";

export default function Dashboard({ navigation }) {
  const handleNavigateToPosts = () => {
    navigation.navigate("Posts");
  };

  const handleNavigateToUsers = () => {
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <Button title="Posts" onPress={handleNavigateToPosts} />
      <Button title="Users" onPress={handleNavigateToUsers} />
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
});

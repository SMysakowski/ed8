import { useState, useMemo } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

import { useUsers } from "../../hooks/api/users/useUsers";
import Input from "../../components/Input";

const UsersScreen = ({ navigation }) => {
  const { data, isError, isLoading } = useUsers();
  const [searchValue, setSearchValue] = useState("");

  const handleNavigateToUser = (userId) => {
    navigation.navigate("User", {
      userId,
    });
  };

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return data;
    }

    return data.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue]);

  return (
    <View style={styles.root}>
      {isLoading && (
        <View style={styles.centeredContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      {isError && (
        <View style={styles.centeredContainer}>
          <Text>Something went wrong</Text>
        </View>
      )}
      {!isLoading && !isError && (
        <FlatList
          ListHeaderComponent={
            <Input
              contained={true}
              placeholder="Search user..."
              value={searchValue}
              onChangeText={setSearchValue}
            />
          }
          data={filteredData}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleNavigateToUser(item.id)}>
              <View style={styles.listItem}>
                <Text style={styles.index}>
                  {index + 1}. <Text style={styles.name}>{item.name}</Text>
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default UsersScreen;

export const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    marginVertical: 6,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#172239",
  },
  index: {
    color: "#6D6D78",
    fontSize: 11,
  },
});

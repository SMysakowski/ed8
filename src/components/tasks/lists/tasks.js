import { FlatList, Text, Image, StyleSheet, View, Button } from "react-native";

import data from "../../../../assets/data.json";

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
  },
  listItemContainer: {
    margin: 8,
  },
  listItemContainerFilled: {
    backgroundColor: "green",
  },
  headerContainer: {
    backgroundColor: "red",
    padding: 16,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

const ListHeaderComponent = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Header</Text>
  </View>
);

const ListFooterComponent = () => (
  <View>
    <Button title="Load more" />
  </View>
);

const ListItemComponent = ({ title, filled = false }) => (
  <View
    style={[
      styles.listItemContainer,
      filled ? styles.listItemContainerFilled : {},
    ]}
  >
    <Image
      style={styles.avatar}
      source={{
        uri: "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
      }}
    />
    <Text>{title}</Text>
  </View>
);

const Task1 = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItemComponent title={item.title} />}
    />
  );
};
const Task2 = () => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => <ListItemComponent title={item.title} />}
    />
  );
};
const Task3 = () => {
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      data={data}
      renderItem={({ item }) => <ListItemComponent title={item.title} />}
    />
  );
};
const Task4 = () => {
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      data={data}
      renderItem={({ item, index }) => {
        const isEven = index % 2 === 0;
        return <ListItemComponent title={item.title} filled={isEven} />;
      }}
    />
  );
};

export const getTaskComponent = (taskNumber) => {
  switch (taskNumber) {
    case 1:
      return Task1;
    case 2:
      return Task2;
    case 3:
      return Task3;
    case 4:
      return Task4;
    default:
      throw new Error(`Task ${taskNumber} not found`);
  }
};

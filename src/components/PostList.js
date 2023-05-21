import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  View,
  Button,
  Pressable,
} from "react-native";

const ListEmptyComponent = () => (
  <View>
    <Text>Nothing to show</Text>
  </View>
);

const ListItemComponent = ({ title, filled = false, onPress }) => (
  <Pressable onPress={onPress}>
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
  </Pressable>
);

const PostList = ({ data = [], handleNavigateToPost }) => {
  return (
    <FlatList
      ListEmptyComponent={ListEmptyComponent}
      data={data}
      renderItem={({ item, index }) => {
        const isEven = index % 2 === 0;
        return (
          <ListItemComponent
            title={item.title}
            filled={isEven}
            onPress={() => handleNavigateToPost(item.id)}
          />
        );
      }}
    />
  );
};

export default PostList;

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

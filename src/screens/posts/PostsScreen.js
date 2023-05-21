import { View, Text, StyleSheet } from "react-native";

import { usePosts } from "../../hooks/api/posts/usePosts";
import PostList from "../../components/PostList";

const Posts = ({ route, navigation }) => {
  const { data, isError, isLoading } = usePosts();

  const handleNavigateToPost = (postId) => {
    navigation.navigate("Post", {
      postId,
    });
  };

  return (
    <View>
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
        <PostList data={data} handleNavigateToPost={handleNavigateToPost} />
      )}
    </View>
  );
};

export default Posts;

export const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

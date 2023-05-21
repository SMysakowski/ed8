import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

import { usePostById } from "../../hooks/api/posts/usePostById";

export default function PostScreen({ route }) {
  const {
    params: { postId },
  } = route;

  const { data, isLoading, isError } = usePostById(postId);
  const parsedData = useMemo(() => (data ? Object.entries(data) : []), [data]);

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
      {!isLoading &&
        !isError &&
        parsedData.map(([key, value]) => (
          <View style={styles.item}>
            <Text>
              <Text style={styles.bold}>{key}</Text>: {value}
            </Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  item: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { SafeAreaView, StyleSheet } from "react-native";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigators/RootNavigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer
          theme={{
            colors: {
              background: "#fff",
            },
          }}
        >
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

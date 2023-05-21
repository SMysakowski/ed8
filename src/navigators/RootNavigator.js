import { createNativeStackNavigator } from "@react-navigation/native-stack";

import JoinScreen from "../screens/JoinScreen";
import PostsScreen from "../screens/PostsScreen";
import PostScreen from "../screens/PostScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Join" component={JoinScreen} />
    <Stack.Screen name="Posts" component={PostsScreen} />
    <Stack.Screen name="Post" component={PostScreen} />
  </Stack.Navigator>
);

export default RootNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PostScreen, PostsScreen } from "../screens/posts";
import { UserScreen, UsersScreen } from "../screens/users";
import { JoinScreen, LoginScreen } from "../screens/auth";
import DashboardScreen from "../screens/Dashboard";

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
    <Stack.Screen name="Users" component={UsersScreen} />
    <Stack.Screen name="User" component={UserScreen} />
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default RootNavigator;

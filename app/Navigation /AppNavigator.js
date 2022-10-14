import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingButton from "./ListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons color={color} name="home" size={size} />
        ),
      }}
      name="Feed"
      component={FeedNavigator}
    />
    <Tab.Screen
      name="ListingEdit"
      options={({ navigation, route }) => ({
        tabBarButton: () => (
          <ListingButton onPress={() => navigation.navigate("ListingEdit")} />
        ),
        headerShown: false,
      })}
      component={ListingEditScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons color={color} name="account" size={size} />
        ),
      }}
      name="account"
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;

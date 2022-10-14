import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      options={{ headerShown: false }}
      name="ListingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

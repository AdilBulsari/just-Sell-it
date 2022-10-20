import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../Navigation /routes";
import api from "../api/listings";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    loading,
    request: loadListing,
  } = useApi(api.getListings);

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      {listings.length === 0 ? (
        <>
          <AppText>No listings found</AppText>
          <AppButton title="Retry" onPress={() => loadListing()} />
        </>
      ) : (
        <>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={"£" + item.price}
                image={item.images[0].url}
                onPress={() => {
                  navigation.navigate(routes.LISTING_DETAILS, item);
                }}
              />
            )}
          />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

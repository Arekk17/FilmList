import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../types/types";
import { theme } from "../styles/theme";

type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, "Details">;
};

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const navigation = useNavigation();
  const { film } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color={theme.colors.primary} />
      </TouchableOpacity>
      <Text style={styles.title}>{film.title}</Text>
      <Text style={styles.openingCrawl}>{film.opening_crawl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginVertical: 60,
    textAlign: "center",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  openingCrawl: {
    fontSize: 18,
    color: theme.colors.white,
    lineHeight: 26,
    textAlign: "justify",
    marginHorizontal: 10,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IFilm } from "../../types/film";
import { theme } from "../../styles/theme";

interface FilmItemProps {
  film: IFilm;
}

export const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { film })}>
      <Text style={styles.itemText}>{film.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemText: {
    padding: 20,
    fontSize: 18,
    color: theme.colors.primary,
    fontFamily: "StarJedi",
  },
});

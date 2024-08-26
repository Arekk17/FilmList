import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
import { useFilms } from "../hooks/useFilm";
import { SearchInput } from "../components/Input/SearchInput";
import { FilmItem } from "../components/FilmItem/FilmItem";
import { IFilm } from "../types/film";
import { theme } from "../styles/theme";

export default function HomeScreen() {
  const { control, watch } = useForm({ defaultValues: { search: "" } });
  const search = watch("search");
  const { data: films, isLoading } = useFilms(search);
  const [visibleFilms, setVisibleFilms] = useState<number>(10);

  const loadMoreFilms = () => {
    if (films && visibleFilms < films.length) {
      setVisibleFilms((prev) => prev + 10);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Film List</Text>
      <SearchInput control={control} />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.primary}
          style={styles.spinner}
        />
      ) : (
        <FlatList
          data={films?.slice(0, visibleFilms)}
          keyExtractor={(item) => item.episode_id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
          onEndReached={loadMoreFilms}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 40,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: theme.colors.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  spinner: {
    marginTop: 20,
    alignSelf: "center",
  },
});

import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Controller, Control } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

interface ISearchInputProps {
  control: Control<{ search: string }>;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ control }) => (
  <Controller
    control={control}
    name="search"
    render={({ field: { onChange, value } }) => (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search films..."
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholderTextColor="#aaa"
        />
        {value.length > 0 && (
          <TouchableOpacity
            onPress={() => onChange("")}
            style={styles.clearButton}
          >
            <Ionicons
              name="close-circle"
              size={24}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    paddingRight: 40,
    marginBottom: 20,
    borderRadius: 8,
    color: theme.colors.primary,
    fontSize: 18,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  clearButton: {
    position: "absolute",
    right: 10,
    top: "35%",
    transform: [{ translateY: -12 }],
  },
});

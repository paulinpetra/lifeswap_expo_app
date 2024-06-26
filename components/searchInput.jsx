import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: isFocused ? "#fffce3" : "gray",
          borderWidth: isFocused ? 1.2 : 0.7, //  borderWidth for shadow effect
          // shadow effect here
          shadowColor: "#fffce3",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 3.84,
          elevation: 5, // For Android shadow
        },
      ]}
    >
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        placeholder="Search places"
        placeholderTextColor="#999"
        value={query}
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please write something to search for results in the database"
            );

          if (pathname.startsWith("/search"))
            router.setParams({ query }); //if already on search page
          else router.push(`/search/${query}`);
        }}
      >
        <FontAwesome5 size={20} name="search" style={styles.logoIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    //borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    width: "80%",
    flexDirection: "row",
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#ffffff",
    flex: 1,
  },
  logoIcon: {
    color: "#fffce3",
  },
});

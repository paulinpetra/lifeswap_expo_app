import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  RefreshControl,
} from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/searchInput";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useEffect } from "react";
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import LifeCards from "../../components/lifeCards";

const Search = () => {
  const { user } = useGlobalContext();

  const { query } = useLocalSearchParams();

  const { data: lives, refetch } = useAppwrite(() => searchPosts(query)); //passing the entire function to the custom hook

  //refetch when the user types in a new search query
  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <ImageBackground
      source={require("../../assets/images/bgpurplerotate.jpeg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <SearchInput initialQuery={query} refetch={refetch} />

        <Link style={{ color: "#CFFF04", fontSize: 24 }} href="/sign-up">
          SIGN-UP
        </Link>
        <Link style={{ color: "#CFFF04", fontSize: 24 }} href="/sign-in">
          SIGN-IN
        </Link>

        <FlatList
          data={lives}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <LifeCards
              place={item.place}
              occupation={item.occupation}
              freetime={item.freetime}
              imageUrl={item.imageUrl}
              creator={item.creator.username}
              avatar={item.creator.avatar}
            />
          )}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Search Results</Text>
                <Text style={styles.welcomeText}>{query}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    //justifyContent: "center",
    //width: "100%",
    //height: "100%",
  },

  //Styles for the List Header Component:
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  welcomeContainer: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#D1D5DB",
  },

  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Search;

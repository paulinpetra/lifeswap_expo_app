import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/searchInput";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useState } from "react";
import { getAllLives } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import LifeCards from "../../components/lifeCards";

const Home = () => {
  const { user } = useGlobalContext();

  const { data: lives, refetch } = useAppwrite(getAllLives); //using the custom hook and rename data lives, passing getAllLives as the function

  //refresh scrolling function for the flatlist
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  return (
    <ImageBackground
      source={require("../../assets/images/bgpurplerotate.jpeg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <SearchInput />

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
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.welcomeText}>{user.username}</Text>
              </View>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
    justifyContent: "center",
    width: "100%",
    height: "100%",
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

export default Home;

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/searchInput";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/bgpurplerotate.jpeg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <SearchInput />

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.welcomeText}>User</Text>
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
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  //Styles for the flatlist items:
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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

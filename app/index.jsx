import "react-native-url-polyfill/auto"; //correct placement?

import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomButton from "../components/customButton";
import { LinearGradient } from "expo-linear-gradient";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <ImageBackground
      source={require("../assets/images/bgpurple.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            <Text style={{ color: "#FFFACD", fontSize: 40 }}>L</Text>
            <Text style={{ color: "#fffce3", fontSize: 30 }}>i</Text>
            <Text>fe</Text>
            <Text style={{ color: "#FFFACD", fontSize: 40 }}>S</Text>
            <Text style={{ color: "#fffce3", fontSize: 30 }}>w</Text>
            <Text>ap</Text>
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <View style={styles.contentContainer}>
            <LinearGradient
              colors={["#6A8EFF", "#5E34E6"]}
              style={[styles.iconContainer]}
            >
              <FontAwesome5
                size={60}
                name="people-arrows"
                style={styles.logoIcon}
              />
            </LinearGradient>

            <View style={styles.onboardingTextContainer}>
              <Text style={styles.onboardingTitle}>
                Ready to Explore a Different Life?
              </Text>
              <Text style={styles.onboardingText}>
                Swap Lives with <Text style={styles.logoText}>LifeSwap</Text>{" "}
                for a Fresh Start!
              </Text>
            </View>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
            />
          </View>
        </ScrollView>
        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 60,
    left: 40,
  },
  logo: {
    fontFamily: "Poppins-Black",
    fontSize: 30,
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  logoIcon: {
    color: "#FFFFFF",
  },

  onboardingTitle: {
    fontFamily: "Poppins-Black",
    fontSize: 24,
    paddingTop: 140,
    paddingBottom: 20,
    textAlign: "center",
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  onboardingTextContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    marginHorizontal: 10,
    paddingBottom: 40,
  },
  onboardingText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
    color: "#ffffff",
  },
  logoText: {
    fontFamily: "Poppins-Black",
    fontSize: 20,
    color: "#ffffff",
  },
});

//  <Link style={{ color: "#CFFF04", fontSize: 24 }} href="/home">
//              HOME
//            </Link>

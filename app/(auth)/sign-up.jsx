import { Link, router } from "expo-router";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/formField";
import CustomButton from "../../components/customButton";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { createUser } from "../../lib/appwrite";
//import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  //const { setUser, setIsLoggedIn } = useGlobalContext();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      //set to global state:
      //setUser(result);
      //setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bgpurple.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.contentContainer}>
            <BlurView intensity={20} style={styles.blurContainer}>
              <Text style={styles.Title}>Sign up to LifeSwap</Text>
              <FormField
                title="Username"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
              />

              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                keyboardType="email-address"
              />

              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
              />
              <CustomButton
                title="Sign Up"
                handlePress={submit}
                isLoading={isSubmitting}
              />
              <View style={styles.signUpLinkContainer}>
                <Text style={styles.accountQuestion}>
                  Already have an account?
                </Text>
                <Link href="/sign-in" style={styles.accountLink}>
                  Sign In
                </Link>
              </View>
            </BlurView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  safeAreaContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "65%",
    width: "100%",
    marginHorizontal: 30,
  },
  blurContainer: {
    flex: 1, // Ensure the BlurView takes up the full space
    width: "100%",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,

    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
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

  Title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#ffffff",
  },
  signUpLinkContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accountQuestion: {
    color: "#ffffff",
  },
  accountLink: {
    color: "#FFFACD",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});

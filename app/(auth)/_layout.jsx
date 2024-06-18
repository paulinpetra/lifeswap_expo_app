import { StyleSheet, Text, View } from "react-native";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
//import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  //const { isLoading, isLoggedIn } = useGlobalContext();
  // if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});

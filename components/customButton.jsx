import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ title, handlePress, isLoading }) => {
  return (
    <LinearGradient colors={["#6A8EFF", "#5E34E6"]} style={styles.customButton}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
        //style={styles.customButtonInner}
      >
        <Text style={styles.customButtonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    opacity: 0.9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  customButtonText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Black",
    fontSize: 20,
    letterSpacing: 1.5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

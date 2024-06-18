import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useState } from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formText}>{title}</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => !isFocused && handleFocus()}
      >
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
            placeholder={placeholder}
            placeholderTextColor="#7B7B8B"
            value={value}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={title === "Password" && !showPassword} //hide password
            {...props}
          />

          {title === "Password" && ( //toggle icon for showing password
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
                <FontAwesome5 size={20} name="eye" style={styles.logoIcon} />
              ) : (
                <FontAwesome5
                  size={20}
                  name="eye-slash"
                  style={styles.logoIcon}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 20,
  },

  formText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  inputContainer: {
    //borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    //height: 30,
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

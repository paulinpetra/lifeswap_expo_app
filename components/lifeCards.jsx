import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const LifeCards = ({
  place,
  occupation,
  freetime,
  imageUrl,
  creator,
  avatar,
}) => {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      resizeMode="cover"
      style={styles.item}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.creator} numberOfLines={1}>
          {creator}
        </Text>
        <Text style={styles.title}>{place}</Text>
        <Text style={styles.title}>{occupation}</Text>
        <Text style={styles.title}>{freetime}</Text>
      </View>
    </ImageBackground>
  );
};

export default LifeCards;

const styles = StyleSheet.create({
  //Styles for the flatlist items:

  item: {
    //background
    flex: 1,
    justifyContent: "center",
    width: 350,
    height: 250,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    marginLeft: 5,
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: 0,
    left: 0,
    paddingRight: 50,
    paddingBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
  },
  creator: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

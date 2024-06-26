import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const LifeCards = ({
  place,
  occupation,
  freetime,
  imageUrl,
  creator,
  avatar,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      //onPress={} go to the profile of the creator
    >
      <View style={[styles.lifeCards, styles.elevatedLifeCards]}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
          resizeMode="contain"
          borderRadius={6}
        />
        <View style={styles.cardBody}>
          <Text style={styles.creator} numberOfLines={1}>
            {creator}
          </Text>
          <Text style={styles.place}>{place}</Text>
          <Text style={styles.occupation}>{occupation}</Text>
          <Text style={styles.freetime}>{freetime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LifeCards;

const styles = StyleSheet.create({
  //Styles for the flatlist items:
  lifeCards: {
    width: 360,
    height: 330,
    borderRadius: 24,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedLifeCards: {
    backgroundColor: "#ffffff",
    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25, // shadow opacity for visibility
    shadowRadius: 15, // shadow radius for softer edges
  },

  cardImage: {
    height: 220,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cardBody: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  place: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#000066",
  },
  occupation: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#333333",
  },
  freetime: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#333333",
  },

  avatar: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 24,
    position: "absolute",
  },
  creator: {
    fontSize: 14,
    color: "#333333",
    fontFamily: "Poppins-Light",
  },
});

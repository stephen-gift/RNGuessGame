import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen() {
  return (
    <View style={styles.gameOverContainer}>
      <View>
        <Title>GAME OVER</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/success.png")}
        />
      </View>
      <Text style={styles.sumaryText}>
        Your phone needed <Text style={styles.highlightText}>X</Text> rounds to
        guess the number <Text style={styles.highlightText}>Y</Text>.
      </Text>
      <PrimaryButton>start new Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  // titleContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumaryText: { fontFamily: "open-sans", fontSize: 24,textAlign:"center" ,marginVertical:24},
  highlightText: { fontFamily: "open-sans-bold", color: Colors.primary500, },
});

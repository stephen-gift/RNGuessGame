import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style={styles.gameOverContainer}>
      <View style={styles.titleContainer}>
        <Title>GAME OVER</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/success.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    paddingTop: 60,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems:"center",
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
});

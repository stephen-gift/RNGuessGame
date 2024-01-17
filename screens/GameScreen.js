import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
        {/* +
        _ */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    paddingTop: 50,
    flex: 1,
  },
});

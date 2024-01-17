import { StyleSheet, Text, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
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
    flex: 1,
  },
});

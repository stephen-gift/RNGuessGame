import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Card({children}) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
    cardContainer:{
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            marginTop: 100,
            marginHorizontal: 24,
            backgroundColor: Colors.primary800,
            borderRadius: 8,
            elevation: 4, // ANDROID SHADOW
            //IOS SHADOW
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.25,
            
    }
});

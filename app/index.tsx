import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const carlogo = require("@/assets/images/car-logo.png");

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/input");
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image source={carlogo} />
      <Text style={styles.appname}>Start Auto Loan</Text>
      <text style={styles.appmini}>วางแผนแออกรถฉบับมือโปร</text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  appmini: { fontFamily: "Kanit_400Regular", fontSize: 20, color: "#8d6268" },
  appname: {
    fontFamily: "Kanit_700Bold",
    fontSize: 40,
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#810e0e",
  },
});

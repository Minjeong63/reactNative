import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Introduce from "./src/introduce";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>민정 홈피</Text>
      <TouchableOpacity>
        <Text>로그인</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet.create
// object를 생성해줌
// css의 자동완성을 가능하게 함

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

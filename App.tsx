import { StyleSheet, View, Image } from "react-native";
import Introduce from "./src/introduce";
// import favicon from "./assets/favicon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Introduce />
      {/* <Image source={favicon} style={{ width: 20, height: 20 }} /> */}
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
    paddingTop: 50,
    paddingBottom: 50,
  },
});

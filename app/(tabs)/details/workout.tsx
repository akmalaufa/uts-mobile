import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function DetailScreen() {
  return (
    <View style={{ backgroundColor: "#808836", width: "100%", height: "100%" }}>
      <View style={{ marginTop: 45, marginLeft: 20 }}>
        <Text style={{ fontSize: 25 }}>MBMC</Text>
        <View style={{ width: 90, height: 3, backgroundColor: "#333" }}></View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Menurunkan</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Berat</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Badan</Text>
      </View>
      <View style={{ marginTop: 35 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ marginRight: 70 }}>
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 30,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("@/assets/images/Dietplan.jpg")}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text
              style={{ marginTop: 5, fontWeight: "bold", textAlign: "center" }}
            >
              Diet Plan
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 30,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("@/assets/images/Skejul.png")}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text style={{ marginTop: 5, fontWeight: "bold" }}>
              Workout Schedule
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ marginRight: 70 }}>
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 30,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("@/assets/images/kalori.jpg")}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text style={{ marginTop: 5, fontWeight: "bold" }}>
              Calorie Tracking
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 120,
                height: 120,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 30,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("@/assets/images/nutrisi.jpg")}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text style={{ marginTop: 5, fontWeight: "bold" }}>
              Nutrition Tips
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 120,
            height: 120,
            backgroundColor: "white",
            borderRadius: 10,
            margin: "auto",
            marginTop: 30,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("@/assets/images/progress.png")}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>
        <Text style={{ textAlign: "center", marginTop: 5, fontWeight: "bold" }}>
          Progress Monitor
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

import { Image, ImageBackground } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
const EnableLocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("@/assets/images/Map.png")}
      >
        <View style={styles.innerWrapper}>
          <View
            style={{
              flex: 1,
              display: "flex",
              gap: 20,
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Image
              style={{ width: 120, height: 120 }}
              source={require("@/assets/images/Location.png")}
            />
            <View>
              <Text style={styles.heading}>Enable your location</Text>
              <Text style={styles.text}>
                Choose your location to start find the request around you
              </Text>
            </View>
            <View style={styles.bottomBtnWrapper}>
              <TouchableOpacity style={styles.bottomBtn}>
                <Text style={styles.bottomBtnText}>Use My Location</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.bottomBtn,
                  { backgroundColor: Colors.light.white, marginTop: 20 },
                ]}
              >
                <Text
                  style={[styles.bottomBtnText, { color: Colors.light.text }]}
                >
                  Use Skip for now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EnableLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: "100%",
    height: "auto",
    contentFit: "stretch",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerWrapper: {
    backgroundColor: Colors.light.white,
    borderRadius: 20,
    height: hp("50%"),
    width: wp("85%"),
  },

  heading: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
    color: Colors.light.title,
  },
  text: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    color: Colors.light.text,
    paddingHorizontal: 20,
  },
  bottomBtnWrapper: {
    width: "100%",
    paddingHorizontal: 20,
  },
  bottomBtn: {
    backgroundColor: Colors.light.theme,
    paddingVertical: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  bottomBtnText: {
    color: Colors.light.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

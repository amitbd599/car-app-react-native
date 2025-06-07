import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, gap: 20 }}>
        <Image
          source={require("@/assets/images/Welcome.png")}
          style={styles.image}
          contentFit='contain'
          transition={1000}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingBottom: 40,
          }}
        >
          <View>
            <Text style={styles.heading}>Enable your location</Text>
            <Text style={styles.text}>Have a better sharing experience</Text>
          </View>
          <View style={styles.bottomBtnWrapper}>
            <TouchableOpacity
              onPress={() => router.push("/(authentication)/signup")}
              style={styles.bottomBtn}
            >
              <Text style={styles.bottomBtnText}>Create An Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bottomBtn,
                {
                  backgroundColor: Colors.light.white,
                  marginTop: 20,
                  borderColor: Colors.light.theme,
                  borderStyle: "solid",
                  borderWidth: 2,
                },
              ]}
            >
              <Text
                style={[
                  styles.bottomBtnText,
                  {
                    color: Colors.light.theme,
                  },
                ]}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
    paddingTop: hp("10%"),
  },
  image: {
    marginVertical: 30,
    width: "100%",
    aspectRatio: 1.5, // width/height ratio
    resizeMode: "contain",
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
    paddingVertical: 15,
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

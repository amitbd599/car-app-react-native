import { View, Text, StyleSheet, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import OnboardingScreenData from "../constants/OnboardingScreenData";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");
const OnboardingScreen = () => {
  let renderItem = ({ item }) => {
    return (
      <View style={styles.slideWrapper}>
        <Image
          source={item.image}
          style={styles.image}
          contentFit='cover'
          transition={1000}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.des}>{item.des}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppIntroSlider
        renderItem={renderItem}
        data={OnboardingScreenData}
        onDone={() => console.log("Done")}
        onSkip={() => console.log("skip")}
        showPrevButton={true}
        bottomButton={true}
        renderNextButton={() => (
          <View style={styles.bottomBtn}>
            <Text style={styles.bottomBtnText}>Next</Text>
          </View>
        )}
        renderPrevButton={() => (
          <View
            style={[
              styles.bottomBtn,
              { marginTop: 12, backgroundColor: Colors.light.dark },
            ]}
          >
            <Text style={styles.bottomBtnText}>Prev</Text>
          </View>
        )}
        renderDoneButton={() => (
          <View style={[styles.bottomBtn]}>
            <Text style={styles.bottomBtnText}>Done</Text>
          </View>
        )}
        dotStyle={{
          backgroundColor: Colors.light.dark,
          borderRadius: 4,
          width: 15,
        }}
        activeDotStyle={{
          backgroundColor: Colors.light.theme,
          borderRadius: 4,
          width: 30,
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  slideWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    position: "relative",
  },
  image: {
    width: width - 20,
    height: undefined,
    resizeMode: "cover",
    aspectRatio: 16 / 9,
    marginVertical: 30,
  },
  btn_image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    position: "absolute",
    left: -100,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.light.title,
  },
  des: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 26,
    color: Colors.light.text,
    paddingHorizontal: 20,
  },
  bottomBtn: {
    backgroundColor: Colors.light.theme,
    paddingVertical: 20,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  bottomBtnText: {
    color: Colors.light.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import PhoneInput from "react-native-phone-input";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          Sign up with your email or phone number
        </Text>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor={Colors.light.text}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={Colors.light.text}
          />

          <PhoneInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    color: Colors.light.title,
  },
  formWrapper: {
    flex: 1,
    gap: 16,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.border,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 10,
  },
  containerStyle: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
  },
});

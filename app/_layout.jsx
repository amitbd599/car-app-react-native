import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName='(authentication)/enableLocation/index'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='onboarding/index' />
        <Stack.Screen name='(authentication)/enableLocation/index' />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;

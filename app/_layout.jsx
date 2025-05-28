import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName='(routes)/onboarding/index'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='(routes)/onboarding/index' />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;

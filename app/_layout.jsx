import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName='(authentication)/welcome/index'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='onboarding/index' />
        <Stack.Screen name='(authentication)/enableLocation/index' />
        <Stack.Screen name='(authentication)/welcome/index' />
        <Stack.Screen
          name='(authentication)/signup/index'
          options={{
            headerShown: true,
            headerTitle: "Back",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;

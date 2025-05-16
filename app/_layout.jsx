import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <Stack screenOptions={{
        headerShown: false,
        animation: 'none',
        contentStyle: { backgroundColor: 'white' }
      }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="surah/[id]" />
      </Stack>
    </SafeAreaProvider>
  );
}
 
import { Stack } from "expo-router";

export default function DrawerLayout() {
  return (
    <Stack>
      <Stack.Screen name="about" options={{ title: "About Us" }} />
      <Stack.Screen name="contact" options={{ title: "Contact Us" }} />
    </Stack>
  );
}

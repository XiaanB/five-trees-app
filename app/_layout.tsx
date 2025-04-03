import { Drawer } from "expo-router/drawer";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles"; // Import styles
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets(); // To handle notches and safe areas

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My App Header</Text>
      </View>

      {/* MAIN CONTENT - Drawer Navigation */}
      <View style={{ flex: 1, paddingBottom: 10 }}> 
        {/* 👆 Adds space for the footer */}
        <Drawer>
          <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
          <Drawer.Screen name="(drawer)/about" options={{ title: "About Us" }} />
          <Drawer.Screen name="(drawer)/contact" options={{ title: "Contact Us" }} />
        </Drawer>
      </View>

      {/* FOOTER */}
      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Text style={styles.footerText}>My App Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200ea",
    padding: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#6200ea",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "white",
    textAlign: "center",
  },
});

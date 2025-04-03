import { View, Text, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { globalStyles } from "./styles"; // Import global styles

  export default function about() {

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert("Success", "You have been logged out successfully!", [
        { text: "OK", onPress: () => router.replace("/auth/sign-in") },
      ]);
      router.replace("/auth/sign-in"); // Redirect to sign-in screen
    } catch (error) {
      console.error("Sign Out Error:", error);
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Welcome to the about us Screen</Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>About Us</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

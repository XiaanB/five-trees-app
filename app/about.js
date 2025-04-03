import { View, Text } from "react-native";
import { globalStyles } from "./styles"; // Import global styles

export default function about() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Welcome to the about us Screen</Text>
    </View>
  );
}

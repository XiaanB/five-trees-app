import { View, Text } from "react-native";
import { globalStyles } from "../../styles"; // Import global styles

export default function products() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Welcome to the Home Screen</Text>
    </View>
  );
}

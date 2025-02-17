import { View, Text } from "react-native";
import GetWord from "../components/word";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GetWord />
    </View>
  );
}

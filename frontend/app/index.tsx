import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [word, setWord] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/words/random")
      .then((res) => {
        console.log("Word: ", res.data.text);
        setWord(res.data.text);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18 }}>Word of the Day: {word}</Text>
      </View>
    </View>
  );
}

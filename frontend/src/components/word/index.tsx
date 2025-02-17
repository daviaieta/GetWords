import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GetWord() {
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
    <View className="flex justify-center items-center h-full w-full">
      <Text className="text-blue-500 text-3xl">Word of the Day: {word}</Text>
    </View>
  );
}

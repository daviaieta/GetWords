import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

export default function GetWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/words/random")
      .then((res) => {
        console.log("Word: ", res.data.text);
        console.log("Definition: ", res.data.definition);
        setWord(res.data.text);
        setDefinition(res.data.definition);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{word}</Text>
      <Text style={styles.definition}>{definition}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#121212",
  },
  title: {
    color: "#ff6347",
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  definition: {
    color: "#cccccc",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24,
  },
});

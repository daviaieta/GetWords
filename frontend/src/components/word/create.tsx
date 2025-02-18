import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function CreateWord() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = async () => {
    if (!word || !definition) {
      alert("Please fill in both fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/words", {
        text: word,
        definition: definition,
      });

      console.log("Submitted:", response.data);
      setWord("");
      setDefinition("");
      Keyboard.dismiss();
    } catch (error) {
      console.error("Error submitting word:", error);
      alert("Failed to submit the word. Please try again.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Word</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter word"
            placeholderTextColor="#888"
            value={word}
            onChangeText={setWord}
            autoCorrect={true}
            autoCapitalize="sentences"
            keyboardType="default"
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter definition"
            placeholderTextColor="#888"
            value={definition}
            onChangeText={setDefinition}
            multiline
            numberOfLines={4}
            autoCorrect={true}
            autoCapitalize="sentences"
            keyboardType="default"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#ffffff", // White text
    textShadowColor: "rgba(255,255,255,0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  form: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 12,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#ff6347",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function ListWords() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await axios.get("http://localhost:3000/words");
      setWords(response.data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const renderWordItem = ({ item }: any) => (
    <TouchableOpacity style={styles.wordItem}>
      <Text style={styles.wordText}>{item.text}</Text>
      <Text style={styles.definitionText}>{item.definition}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word List</Text>
      <FlatList
        data={words}
        renderItem={renderWordItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
  wordItem: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#ff6347", // Tomato color accent
  },
  wordText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff6347", // Tomato color for the word
    marginBottom: 8,
  },
  definitionText: {
    fontSize: 16,
    color: "#cccccc", // Light gray for better readability
    lineHeight: 22,
  },
});

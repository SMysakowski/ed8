import "react-native-get-random-values";

import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import Button from "../../components/Button";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const NOTES_STORAGE_KEY = "@test-app/notes";

const saveNotes = async (notes) => {
  await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
};

const getNotes = async () => {
  const notes = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
  if (notes) {
    return JSON.parse(notes);
  }
  return [];
};

export default function NotesScreen() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((notes) => setNotes(notes));
  }, []);

  const handleDeleteNote = async (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    await saveNotes(filteredNotes);
    setNotes(filteredNotes);
  };

  const handleAddNote = async () => {
    const uuid = uuidv4();

    const newNote = {
      title: uuid,
      body: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: uuid,
      createdAt: dayjs(),
    };
    const newNotes = [newNote, ...notes];

    await saveNotes(newNotes);
    setNotes(newNotes);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>NotesScreen</Text>
      <Button title="Add a new note" onPress={handleAddNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <Note
            onPress={() => handleDeleteNote(item.id)}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
          />
        )}
      />
    </View>
  );
}

const Note = ({ title, body, createdAt, onPress }) => (
  <Pressable onPress={onPress}>
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text style={styles.noteBody}>{body}</Text>
      <Text style={styles.createdAt}>{dayjs(createdAt).fromNow()}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  root: {
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  noteContainer: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    marginVertical: 13,
    padding: 16,
  },
  noteTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 6,
  },
  noteBody: {
    color: "#6D6D78",
    fontSize: 12,
  },
  createdAt: {
    paddingTop: 4,
    color: "#6D6D78",
    fontSize: 10,
  },
});

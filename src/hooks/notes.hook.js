import { useState, useEffect } from 'react';
import { getNotes, saveNotes } from '../services/notes';


const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      const loadedNotes = await getNotes();
      setNotes(loadedNotes);
      if (loadedNotes.length > 0 && !activeNote) {
        setActiveNote(loadedNotes[0].id);
      }
    };
    loadNotes();
  }, []);

  const filteredNotes = notes?.filter(
    (note) =>
      note?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      note?.content?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const addNote = () => {
    const newNote = {
      id: crypto.randomUUID(),
      title: 'New Note',
      content: '# New Note\nStart writing here...',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    setActiveNote(newNote.id);
  };

  const deleteNote = async (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
    if (activeNote === id) {
      setActiveNote(updatedNotes.length > 0 ? updatedNotes[0].id : null);
    }
  };

  const updateNote = async (noteToSave) => {
    const now = new Date().toISOString();
    const isInvalidNote = !noteToSave || !noteToSave.id;
    let updatedNotes;
  
    if (isInvalidNote) {
      const newNote = {
        id: crypto.randomUUID(),
        title: noteToSave?.title || 'Untitled Note',
        content: noteToSave?.content || '',
        createdAt: now,
        updatedAt: now,
      };
      updatedNotes = [...notes, newNote];
      setActiveNote(newNote.id);
    } else {
      const noteExists = notes.some(note => note.id === noteToSave.id);
  
      if (noteExists) {
        updatedNotes = notes.map(note =>
          note.id === noteToSave.id
            ? { ...note, ...noteToSave, updatedAt: now }
            : note
        );
      } else {
        const newNote = {
          ...noteToSave,
          createdAt: now,
          updatedAt: now,
        };
        updatedNotes = [...notes, newNote];
        setActiveNote(newNote.id);
      }
    }
  
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  };
  

  return {
    notes: filteredNotes,
    activeNote,
    searchTerm,
    setSearchTerm,
    addNote,
    deleteNote,
    updateNote,
    setActiveNote,
    getActiveNote: () => notes.find((note) => note.id === activeNote),
  };
};

export default useNotes;
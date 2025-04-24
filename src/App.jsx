import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useNotes from "./hooks/notes.hook";
import theme from "./styles/themes";
import NoteList from "./components/Notelist";
import NoteEditor from "./components/NoteEditor";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useEffect } from "react";

const App = () => {
  const {
    notes,
    activeNote,
    searchTerm,
    setSearchTerm,
    addNote,
    deleteNote,
    updateNote,
    setActiveNote,
    getActiveNote,
  } = useNotes();
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "You have unsaved changes. Are you sure you want to leave?";
      event.returnValue = message;
      return message;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div style={{ display: "flex", height: "100vh" }}>
          <NoteList
            notes={notes}
            activeNote={activeNote}
            searchTerm={searchTerm}
            onAddNote={addNote}
            onDeleteNote={deleteNote}
            onSelectNote={setActiveNote}
            onSearchChange={setSearchTerm}
          />
          <NoteEditor
            note={getActiveNote()}
            onSave={updateNote}
            onDelete={deleteNote}
          />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;

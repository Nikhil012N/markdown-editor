import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Box,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { Add, Delete, Search } from '@mui/icons-material';
import styled from '@emotion/styled';

const Sidebar = styled(Box)`
  width: 300px;
  background-color: #fdfdfd;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SearchContainer = styled(Box)`
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const NotesContainer = styled(Box)`
  flex: 1;
  overflow-y: auto;
`;

const AddButtonContainer = styled(Box)`
  padding: 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const StyledListItem = styled(ListItem)`
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f0f0f0;
  }
  &.Mui-selected {
    background-color: #e3f2fd !important;
  }
`;

const NoteList = ({
  notes,
  activeNote,
  searchTerm,
  onAddNote,
  onDeleteNote,
  onSelectNote,
  onSearchChange,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [deletedNoteTitle, setDeletedNoteTitle] = useState('');

  const handleAddNote = () => {
    onAddNote();
    setSnackbarMessage('Note created successfully');
    setSnackbarOpen(true);
  };

  const handleDeleteNote = (note) => {
    if (window.confirm(`Delete "${note.title || 'Untitled Note'}"?`)) {
      onDeleteNote(note.id);
      setDeletedNoteTitle(note.title || 'Untitled Note');
      setSnackbarMessage(`Deleted: ${note.title || 'Untitled Note'}`);
      setSnackbarOpen(true);
    }
  };

  return (
    <Sidebar>
      <SearchContainer>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>

      <NotesContainer>
        {notes.length === 0 ? (
          <Box textAlign="center" mt={4} px={2}>
            <Typography variant="body2" color="textSecondary">
              No notes found. Try creating a new one.
            </Typography>
          </Box>
        ) : (
          <List>
            {notes.map((note) => (
              <StyledListItem
                key={note.id}
                button
                selected={note.id === activeNote}
                onClick={() => onSelectNote(note.id)}
                secondaryAction={
                  <IconButton edge="end" onClick={() => handleDeleteNote(note)}>
                    <Delete fontSize="small" />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={note.title || 'Untitled Note'}
                  secondary={new Date(note.updatedAt).toLocaleString()}
                  primaryTypographyProps={{ noWrap: true }}
                  secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                />
              </StyledListItem>
            ))}
          </List>
        )}
      </NotesContainer>

      <AddButtonContainer>
        <Button
          color="primary"
          aria-label="add note"
          onClick={handleAddNote}
          size="large"
          variant="outlined"
        >
          <Add /> Create
        </Button>
      </AddButtonContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="info" variant="filled" onClose={() => setSnackbarOpen(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Sidebar>
  );
};

export default NoteList;

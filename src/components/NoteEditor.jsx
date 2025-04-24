import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Tabs,
  Tab,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  background-color: #f5f5f5;
  width: 100%;
`;

const EditorBox = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;

const Preview = styled(Box)`
  flex: 1;
  overflow-y: auto;
  font-family: 'Segoe UI', sans-serif;
  font-size: 15px;
  line-height: 1.6;
`;

const NoteEditor = ({ note, onSave, onDelete }) => {
  const [localNote, setLocalNote] = useState(note || { id: '', title: '', content: '' });
  const [activeTab, setActiveTab] = useState('edit');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    setLocalNote(note || { id: '', title: '', content: '' });
  }, [note]);

  const handleChange = (field, value) => {
    setLocalNote((prev) => ({
      ...prev,
      [field]: value,
      updatedAt: new Date().toISOString(),
    }));
  };

  const handleSave = () => {
    if (onSave) onSave(localNote);
    setSnackbarMessage('Note saved successfully');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(localNote?.id);
    setSnackbarMessage('Note deleted');
    setSnackbarSeverity('warning');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <TextField
        fullWidth
        variant="outlined"
        value={localNote.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Note Title"
        sx={{ mb: 2 }}
      />

      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        indicatorColor="primary"
        textColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="Edit" value="edit" />
        <Tab label="Preview" value="preview" />
      </Tabs>

      <EditorBox>
        {activeTab === 'edit' ? (
          <TextField
            fullWidth
            multiline
            minRows={20}
            value={localNote.content}
            onChange={(e) => handleChange('content', e.target.value)}
            placeholder="Write your markdown content..."
            variant="outlined"
            sx={{ height: '100%' }}
          />
        ) : (
          <Preview>
            {localNote.content ? (
              <ReactMarkdown>{localNote.content}</ReactMarkdown>
            ) : (
              <Typography color="textSecondary">Nothing to preview.</Typography>
            )}
          </Preview>
        )}

        <ButtonBox>
          <Button onClick={handleDelete} color="error" variant="outlined">
            Delete
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </ButtonBox>
      </EditorBox>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbarSeverity} onClose={handleSnackbarClose} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default NoteEditor;

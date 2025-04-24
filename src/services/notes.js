const NOTES_DB_NAME = 'MarkdownNotesDB';
const NOTES_STORE_NAME = 'notes';

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(NOTES_DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(NOTES_STORE_NAME)) {
        db.createObjectStore(NOTES_STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const withDB = async (operation) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([NOTES_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(NOTES_STORE_NAME);

    transaction.oncomplete = () => db.close();
    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };

    operation(store, resolve, reject);
  });
};

export const getNotes = async () => {
  return withDB((store, resolve) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
  });
};

export const saveNotes = async (notes) => {
  return withDB((store, resolve) => {
    const clearRequest = store.clear();
    clearRequest.onsuccess = () => {
      if (notes.length === 0) return resolve();
      notes.forEach((note) => store.put(note));
      resolve();
    };
  });
};

export const saveNote = async (note) => {
  return withDB((store, resolve) => {
    const request = store.put(note);
    request.onsuccess = () => resolve();
  });
};

export const deleteNote = async (id) => {
  return withDB((store, resolve) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve();
  });
};
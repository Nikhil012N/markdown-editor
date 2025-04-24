 Markdown Editor - By Nikhil

Markdown Editor - By Nikhil
===========================

A simple, fast, and secure Markdown Editor application built with React, Vite, Material UI, and Electron. This project allows users to create, edit, and delete markdown notes efficiently. It features a clean user interface, real-time previews for markdown content, and follows best practices for security and performance.

Features
--------

* **Create Notes**: Add new markdown notes with a click of a button.
* **Search Notes**: Quickly search through your notes.
* **Delete Notes**: Remove notes with a confirmation dialog and receive a notification upon successful deletion.
* **Real-time Preview**: See live markdown rendering while you type.
* **Responsive Design**: Works smoothly on both desktop and mobile devices.
* **Security**: The app is built with secure web development practices, such as Content Security Policy (CSP).
* **Electron Support**: Build a desktop app for Windows, macOS, and Linux.
* **Persistent Storage with IndexedDB**: Saves your notes locally for offline use, leveraging IndexedDB for storing data.

Tech Stack
----------

* **Frontend**: React.js, Vite, Material-UI, Emotion (Styled Components)
* **State Management**: React's `useState` and `useEffect`
* **Tools**: Vite for fast build and development experience
* **UI Components**: Material-UI for modern, customizable UI components
* **Code Styling**: Emotion for styled components
* **Electron**: Framework for building cross-platform desktop applications
* **Storage**: IndexedDB for persistent, local storage of markdown notes

Installation
------------

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (>= 16.x)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* [Electron](https://www.electronjs.org/) (Optional for building desktop version)

### Steps

1.  **Clone the repository:**
    
        git clone https://github.com/Nikhil012N/markdown-editor.git
        cd markdown-editor
    
2.  **Install dependencies:**
    
    If you are using npm:
    
        npm install
    
    Or, if you are using yarn:
    
        yarn install
    
3.  **Run the development server:**
    
    If you are using npm:
    
        npm run dev
    
    Or with yarn:
    
        yarn dev
    
    Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.
    
4.  **Build for Desktop (Electron):**
    
    To package the app as a desktop application, run the following command:
    
        npm run electron:build
    
    Ensure you have Electron and its dependencies properly set up for this step.
    

Usage
-----

* **Creating a Note**: Click the "Create" button on the sidebar to add a new note.
* **Editing a Note**: Click on any note in the sidebar to start editing the content.
* **Searching Notes**: Use the search bar at the top to filter and find notes by title.
* **Deleting a Note**: Click the delete icon next to a note, confirm, and it will be removed from the list.
* **Viewing Note Details**: Click a note to view more details such as title and last edited timestamp.
* **Offline Usage**: The app stores your notes locally in IndexedDB, allowing you to access your notes even when offline.

Code Structure
--------------

    /markdown-editor
      ├── /electron             # Electron-specific files for desktop packaging
              ├── main.js          # Main Electron process
              ├── preload.js # Electron build configuration
      ├── /src
          ├── /components
              ├── Notelist.jsx       # List of notes with add, delete, and 
              search functionality
              ├── NoteEditor.jsx       
              ├── ErrorBoundary.jsx  # Error boundary for handling runtime errors
          ├── /styles
              ├── global.css        # Global styles and themes
          ├── App.jsx                # Main App component
          ├── main.jsx              # Entry point for the app
      ├── /public
          ├── /index.html           # The main HTML template
      ├── package.json              # Project metadata and dependencies
      ├── vite.config.js            # Vite configuration
    

### File Breakdown

* **App.js**: The main component that manages the state and renders the core layout.
* **NoteList.js**: The sidebar containing the list of notes, their search, and delete functionalities.
* **ErrorBoundary.js**: A component to catch and display errors in a clean manner.
* **Electron Files**: Contains Electron-specific files for building and packaging the desktop app.

Security Features
-----------------

This application is designed with security in mind:

* **Content Security Policy (CSP)**: Prevents cross-site scripting (XSS) attacks by restricting the resources (scripts, images, etc.) that can be loaded.
* **Safe Resource Loading**: Only loads resources from trusted origins.
* **X-Content-Type-Options**: Prevents browsers from interpreting files as something else (like a script).

Future Enhancements
-------------------

* **User Authentication**: Allow users to log in and save their notes securely in the cloud.
* **Markdown Export**: Provide functionality to export markdown notes as .md files.
* **Theming**: Implement dark/light mode support.

Contributing
------------

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes or new features. Here’s how you can contribute:

1.  Fork this repository.
2.  Clone your forked repo locally.
3.  Create a new branch for your feature or fix.
4.  Push your changes to your forked repository.
5.  Open a pull request to the main repository.

License
-------

This project is open source and available under the MIT License.

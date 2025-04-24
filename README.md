# Markdown Editor - By Nikhil

A simple, fast, and secure Markdown Editor application built with React, Vite, and Material UI. This project allows users to create, edit, and delete markdown notes efficiently. It features a clean user interface, and real-time previews for markdown content, and follows best practices for security and performance.

## Features

- **Create Notes**: Add new markdown notes with a click of a button.
- **Search Notes**: Quickly search through your notes.
- **Delete Notes**: Remove notes with a confirmation dialog and receive a notification upon successful deletion.
- **Real-time Preview**: See live markdown rendering while you type.
- **Responsive Design**: Works smoothly on both desktop and mobile devices.
- **Security**: The app is built with secure web development practices, such as Content Security Policy (CSP).

## Tech Stack

- **Frontend**: React.js, Vite, Material-UI, Emotion (Styled Components)
- **State Management**: React's `useState` and `useEffect`
- **Tools**: Vite for fast build and development experience
- **UI Components**: Material-UI for modern, customizable UI components
- **Code Styling**: Emotion for styled components

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Nikhil012N/markdown-editor.git
   cd markdown-editor


Install dependencies:

If you are using npm:

bash
Copy
Edit
npm install
Or, if you are using yarn:

bash
Copy
Edit
yarn install
Run the development server:

bash
Copy
Edit
npm run dev
Or with yarn:

bash
Copy
Edit
yarn dev
Open http://localhost:5173 in your browser to see the application.

Usage
Creating a Note: Click the "Create" button on the sidebar to add a new note.

Editing a Note: Click on any note in the sidebar to start editing the content.

Searching Notes: Use the search bar at the top to filter and find notes by title.

Deleting a Note: Click the delete icon next to a note, confirm, and it will be removed from the list.

Viewing Note Details: Click a note to view more details such as title and last edited timestamp.

Code Structure
Here’s an overview of the project directory:

bash
Copy
Edit
/markdown-editor
  ├── /src
      ├── /components
          ├── NoteList.js       # List of notes with add, delete, and search functionality
          ├── ErrorBoundary.js  # Error boundary for handling runtime errors
      ├── /styles
          ├── global.css        # Global styles and themes
      ├── App.js                # Main App component
      ├── index.js              # Entry point for the app
  ├── /public
      ├── /index.html           # The main HTML template
  ├── package.json              # Project metadata and dependencies
  ├── vite.config.js            # Vite configuration
File Breakdown:
App.js: The main component that manages the state and renders the core layout.

NoteList.js: The sidebar containing the list of notes, their search, and delete functionalities.

ErrorBoundary.js: A component to catch and display errors in a clean manner.

Security Features
This application is designed with security in mind:

Content Security Policy (CSP): Prevents cross-site scripting (XSS) attacks by restricting the resources (scripts, images, etc.) that can be loaded.

Safe Resource Loading: Only loads resources from trusted origins.

X-Content-Type-Options: Prevents browsers from interpreting files as something else (like a script).

Future Enhancements
User Authentication: Allow users to log in and save their notes securely in the cloud.

Markdown Export: Provide functionality to export markdown notes as .md files.

Theming: Implement dark/light mode support.

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes or new features. Here’s how you can contribute:

Fork this repository.

Clone your forked repo locally.

Create a new branch for your feature or fix.

Push your changes to your forked repository.

Open a pull request to the main repository.

License
This project is open source and available under the MIT License.
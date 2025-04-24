<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown Editor - By Nikhil</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f9f9f9; color: #333;">
  <div style="max-width: 900px; margin: 0 auto; padding: 20px;">
    <h1 style="color: #333;">Markdown Editor - By Nikhil</h1>
    <p>A simple, fast, and secure Markdown Editor application built with React, Vite, and Material UI. This project allows users to create, edit, and delete markdown notes efficiently. It features a clean user interface, real-time previews for markdown content, and follows best practices for security and performance.</p>

    <h2>Features</h2>
    <ul>
      <li><strong>Create Notes</strong>: Add new markdown notes with a click of a button.</li>
      <li><strong>Search Notes</strong>: Quickly search through your notes.</li>
      <li><strong>Delete Notes</strong>: Remove notes with a confirmation dialog and receive a notification upon successful deletion.</li>
      <li><strong>Real-time Preview</strong>: See live markdown rendering while you type.</li>
      <li><strong>Responsive Design</strong>: Works smoothly on both desktop and mobile devices.</li>
      <li><strong>Security</strong>: The app is built with secure web development practices, such as Content Security Policy (CSP).</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Frontend</strong>: React.js, Vite, Material-UI, Emotion (Styled Components)</li>
      <li><strong>State Management</strong>: React's <code>useState</code> and <code>useEffect</code></li>
      <li><strong>Tools</strong>: Vite for fast build and development experience</li>
      <li><strong>UI Components</strong>: Material-UI for modern, customizable UI components</li>
      <li><strong>Code Styling</strong>: Emotion for styled components</li>
    </ul>

    <h2>Installation</h2>
    <h3>Prerequisites</h3>
    <p>Make sure you have the following installed:</p>
    <ul>
      <li><a href="https://nodejs.org/" target="_blank">Node.js</a> (>= 16.x)</li>
      <li><a href="https://www.npmjs.com/" target="_blank">npm</a> or <a href="https://yarnpkg.com/" target="_blank">yarn</a></li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li><strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/Nikhil012N/markdown-editor.git
cd markdown-editor</code></pre>
      </li>
      <li><strong>Install dependencies:</strong>
        <p>If you are using npm:</p>
        <pre><code>npm install</code></pre>
        <p>Or, if you are using yarn:</p>
        <pre><code>yarn install</code></pre>
      </li>
      <li><strong>Run the development server:</strong>
        <p>If you are using npm:</p>
        <pre><code>npm run dev</code></pre>
        <p>Or with yarn:</p>
        <pre><code>yarn dev</code></pre>
        <p>Open <a href="http://localhost:5173" target="_blank">http://localhost:5173</a> in your browser to see the application.</p>
      </li>
    </ol>

    <h2>Usage</h2>
    <ul>
      <li><strong>Creating a Note</strong>: Click the "Create" button on the sidebar to add a new note.</li>
      <li><strong>Editing a Note</strong>: Click on any note in the sidebar to start editing the content.</li>
      <li><strong>Searching Notes</strong>: Use the search bar at the top to filter and find notes by title.</li>
      <li><strong>Deleting a Note</strong>: Click the delete icon next to a note, confirm, and it will be removed from the list.</li>
      <li><strong>Viewing Note Details</strong>: Click a note to view more details such as title and last edited timestamp.</li>
    </ul>

    <h2>Code Structure</h2>
    <pre><code>/markdown-editor
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
</code></pre>

    <h3>File Breakdown</h3>
    <ul>
      <li><strong>App.js</strong>: The main component that manages the state and renders the core layout.</li>
      <li><strong>NoteList.js</strong>: The sidebar containing the list of notes, their search, and delete functionalities.</li>
      <li><strong>ErrorBoundary.js</strong>: A component to catch and display errors in a clean manner.</li>
    </ul>

    <h2>Security Features</h2>
    <p>This application is designed with security in mind:</p>
    <ul>
      <li><strong>Content Security Policy (CSP)</strong>: Prevents cross-site scripting (XSS) attacks by restricting the resources (scripts, images, etc.) that can be loaded.</li>
      <li><strong>Safe Resource Loading</strong>: Only loads resources from trusted origins.</li>
      <li><strong>X-Content-Type-Options</strong>: Prevents browsers from interpreting files as something else (like a script).</li>
    </ul>

    <h2>Future Enhancements</h2>
    <ul>
      <li><strong>User Authentication</strong>: Allow users to log in and save their notes securely in the cloud.</li>
      <li><strong>Markdown Export</strong>: Provide functionality to export markdown notes as .md files.</li>
      <li><strong>Theming</strong>: Implement dark/light mode support.</li>
    </ul>

    <h2>Contributing</h2>
    <p>Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes or new features. Here’s how you can contribute:</p>
    <ol>
      <li>Fork this repository.</li>
      <li>Clone your forked repo locally.</li>
      <li>Create a new branch for your feature or fix.</li>
      <li>Push your changes to your forked repository.</li>
      <li>Open a pull request to the main repository.</li>
    </ol>

    <h2>License</h2>
    <p>This project is open source and available under the MIT License.</p>
  </div>
</body>
</html>

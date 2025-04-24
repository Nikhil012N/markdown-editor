const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const process = require('process');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
    frame: true,
    titleBarStyle: "default",
  });

  // Hide default menu bar
  mainWindow.setMenu(null);
  mainWindow.setAutoHideMenuBar(true);

  // Load URL based on environment
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    const indexPath = path.join(__dirname, '../dist/index.html'); 
    mainWindow.loadURL(
      url.format({
        pathname: indexPath,
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('close', (event) => {
    const response = dialog.showMessageBoxSync(mainWindow, {
      type: 'warning',
      buttons: ['Cancel', 'Close'],
      defaultId: 1,
      title: 'Confirm Close',
      message: 'Are you sure you want to close the window',
    });

    if (response === 0) {
      event.preventDefault();
    }
    if (response === 1 && mainWindow) {
      mainWindow.destroy(); 
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Window control events
  ipcMain.on('minimize', () => mainWindow.minimize());
  ipcMain.on('maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });
  ipcMain.on('close', () => mainWindow.close());
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld('electronAPI', {
  // Expose any Electron APIs needed by the renderer
});
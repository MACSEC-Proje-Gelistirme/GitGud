const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
const isDev = !app.isPackaged;

function createWindow() {
  console.log('createWindow function is called');
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.removeMenu();

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './build/index.html')}`;
  
  console.log('URL:', startURL);
  
  mainWindow.loadURL(startURL);
  

  mainWindow.webContents.on('did-fail-load', (_, errorCode, errorDescription) => {
    console.log('page loading error:', errorCode, errorDescription);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  console.log('Electron app is ready');
  createWindow();
});

// Hata yakalama
process.on('uncaughtException', (error) => {
  console.log('uncaught Exception:', error);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
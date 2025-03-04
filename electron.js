const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

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
      enableRemoteModule: true,
      sandbox: false,
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

ipcMain.handle('gitPush', (event, commitMessage, files) => {
  return new Promise((resolve, reject) => {
    exec('git add .', (err, stdout, stderr) => {
      if (err) {
        reject('Error during git add');
        return;
      }

      exec(`git commit -m "${commitMessage}"`, (err, stdout, stderr) => {
        if (err) {
          reject('Error during git commit');
          return;
        }

        exec('git push', (err, stdout, stderr) => {
          if (err) {
            reject('Error during git push');
            return;
          }
          resolve('Push successful!');
        });
      });
    });
  });
});

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

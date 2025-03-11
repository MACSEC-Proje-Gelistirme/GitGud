const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  dialog: {
    openDirectory: () => ipcRenderer.invoke('dialog:openDirectory'),
  },
})

import isElectron from "is-electron"

export default (function() {
  if(isElectron()) {
    const dialog = window.remote.dialog
    const ipc = window.remote.ipcMain
  
    ipc.on('dialog-show', function(event, arg) {
      dialog.showOpenDialog({
        title: '打开dialog',
        defaultPath: 'd:/Picture/',
        filters: [
          { name: 'images', extensions: ['png','jpg']},
          {name: 'move', extensions: ['mp4']}
        ],
        properties: ['createDirectory']
      }).then(filenames => {
        console.log(filenames.filePaths)
      })
    })
  }
  
})()
export default (function() {
  const dialog = window.remote.dialog
  const ipc = window.electron.ipcMain

  ipc.on('openDialog', function(event, arg) {
    dialog.showOpenDialog({
      title: '打开dialog',
      defaultPath: 'd:/Picture/',
      filters: [
        { name: 'images', extensions: ['png','jpg']},
        {name: 'move', extensions: ['mp4']}
      ],
      properties: ['createDirectory']
    }).then(filenames => {
      console.log(filenames)
    })
  })
})()
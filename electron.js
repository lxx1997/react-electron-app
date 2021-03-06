// Modules to control application life and create native browser window
// var window = new Window()
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
// const { url } = require('url')

function createWindow () {
  // Create the browser window.
  // 隐藏菜单栏
  Menu.setApplicationMenu(null)
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // icon: path.join(__dirname, '/assets/img/2.jpg'),
    // title: 'this is a electron'
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: true, // 是否集成 Nodejs
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.loadURL('http://localhost:3000/')
  // 加载应用----react 打包

// 　　mainWindow.loadURL(url.format({
//   　　pathname: path.join(__dirname, './build/index.html'),
//   　　protocol: 'file:',
//   　　slashes: true
// 　　}))




  // // 添加快捷键
  // globalShortcut.unregisterAll()
  // globalShortcut.register('ctrl+q', function() {
  //   app.quit()
  // })
  // globalShortcut.register('ctrl+c', function() {
    // dialog.showOpenDialog(mainWindow, {
    //   title: '打开dialog',
    //   defaultPath: 'd:/Picture/',
    //   filters: [
    //     { name: 'images', extensions: ['png','jpg']},
    //     {name: 'move', extensions: ['mp4']}
    //   ],
    //   properties: ['createDirectory']
    // }).then(filenames => {
    //   console.log(filenames)
    // })
  //   ipcRenderer.send('ipcRenderer', 'openDialog')
  // })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  console.log('ready')
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

import isElectron from "is-electron"

export default (function Menu() {
  if(isElectron()) {
    const remote = window.remote
    const Menu = remote.Menu
    const MenuItem =remote.MenuItem
  
    var menu = new Menu()
    menu.append(new MenuItem({label: 'copy', click: function() {
      console.log('click')
    }}))
    menu.append(new MenuItem({label: 'paste', click: function() {
      console.log('paste')
    }}))
    menu.append(new MenuItem({label: 'delete', click: function() {
      console.log('delete')
    }}))
    // 设置右键查看栏
    window.addEventListener('contextmenu', function(e) {
      e.preventDefault()
      menu.popup(remote.getCurrentWindow())
    }, false)

    // 设置顶部菜单栏
    const topMenu = [
      {
        label: '文件',
        submenu: [
          {
            label: '新建文件夹',
            // 快捷键
            accelerator: '(ctrl+N)',
            click: function() {
              console.log('新建文件夹')
            }
          },
          {
            label: '新建文件',
            click: function() {
              console.log('新建文件')
            }
          }
        ]
      },
      {
        label: '操作',
        submenu: [
          {
            label: '前进',
            click: function() {
              console.log('前进')
            }
          },
          {
            label: '后退',
            click: function() {
              console.log('后退')
            }
          }
        ]
      },
      {
        label: '查看',
        submenu: [
          {
            label: '列表',
            click: function() {
              console.log('列表')
            }
          },
          {
            label: '图形',
            click: function() {
              console.log('图形')
            }
          }
        ]
      }
    ]
    const customMenu = Menu.buildFromTemplate(topMenu);
    Menu.setApplicationMenu(customMenu);
  }
})()
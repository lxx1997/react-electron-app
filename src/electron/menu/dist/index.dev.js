

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isElectron = _interopRequireDefault(require("is-electron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function Menu() {
  if ((0, _isElectron["default"])()) {
    var remote = window.remote;
    var _Menu = remote.Menu;
    var MenuItem = remote.MenuItem;
    var menu = new _Menu();
    menu.append(new MenuItem({
      label: 'copy',
      click: function click() {
        console.log('click');
      }
    }));
    menu.append(new MenuItem({
      label: 'paste',
      click: function click() {
        console.log('paste');
      }
    }));
    menu.append(new MenuItem({
      label: 'delete',
      click: function click() {
        console.log('delete');
      }
    })); // 设置右键查看栏

    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      menu.popup(remote.getCurrentWindow());
    }, false); // 设置顶部菜单栏

    var topMenu = [// {
      //   label: '文件',
      //   submenu: [
      //     {
      //       label: '新建文件夹',
      //       // 快捷键
      //       accelerator: '(ctrl+N)',
      //       click: function() {
      //         console.log('新建文件夹')
      //       }
      //     },
      //     {
      //       label: '新建文件',
      //       click: function() {
      //         console.log('新建文件')
      //       }
      //     }
      //   ]
      // },
      // {
      //   label: '操作',
      //   submenu: [
      //     {
      //       label: '前进',
      //       click: function() {
      //         console.log('前进')
      //       }
      //     },
      //     {
      //       label: '后退',
      //       click: function() {
      //         console.log('后退')
      //       }
      //     }
      //   ]
      // },
      // {
      //   label: '查看',
      //   submenu: [
      //     {
      //       label: '列表',
      //       click: function() {
      //         console.log('列表')
      //       }
      //     },
      //     {
      //       label: '图形',
      //       click: function() {
      //         console.log('图形')
      //       }
      //     }
      //   ]
      // }
    ];

    var customMenu = _Menu.buildFromTemplate(topMenu);

    _Menu.setApplicationMenu(customMenu);
  }
}();

exports["default"] = _default;
'use strict'

import { app, Menu, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    // resizable: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: (process.env
      //     .ELECTRON_NODE_INTEGRATION as unknown) as boolean
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST&&isDevelopment) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  win.on('closed', () => {
    win = null
  })
  const mainMenuTemplate: object[] = createMainMenuTemplate()
  const mainMenu: Menu = Menu.buildFromTemplate(mainMenuTemplate)
  // mainMenu.getMenuItemById('login').enabled = true;
  // mainMenu.getMenuItemById('logout').enabled = false;
  // mainMenu.getMenuItemById('currentWeather').enabled = false;
  Menu.setApplicationMenu(mainMenu)
}

//Create main menu template for the Menu to be built from
function createMainMenuTemplate(): object[]{
  let mainMenuTemplate: object[] = [
    {
      label: 'File',
      submenu:[
        {
          label: 'Home',
          accelerator: process.platform == 'darwin' ? 'Command+H': 'Ctrl+H',
          click(){
            win!.loadURL("http://localhost:8080/")
          }
        },
        {
            id: 'login',
            label: 'Login',
            accelerator: process.platform == 'darwin' ? 'Command+L': 'Ctrl+L',
            click(){
              win!.loadURL("http://localhost:8080/login")
            }
        },
        {
            id: 'logout',
            label: 'Logout',
            accelerator: process.platform == 'darwin' ? 'Command+O': 'Ctrl+O',
            click(){
                win!.webContents.send("logout")
            }
        },
        {
            label: 'Quit',
            accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q',
            click(){
                app.quit()
            }
        }
      ]
    },
    {
      label: 'View',
      submenu:[
        {
            role: 'reload'
        },
        {
          role: 'resetzoom',
          accelerator: process.platform == 'darwin' ? 'Command+0': 'Ctrl+0',
        },
        {
            role: 'zoomin',
            accelerator: process.platform == 'darwin' ? 'Command++': 'Ctrl+=',
        },
        {
            role: 'zoomout',
            accelerator: process.platform == 'darwin' ? 'Command+-': 'Ctrl+-',
        }
      ]
    },
    {
      label: 'Services',
      submenu:[
          {
              id: 'currentWeather',
              label: 'Current Weather',
              accelerator: process.platform == 'darwin' ? 'Command+W': 'Ctrl+W',
              click(){
                win!.loadURL("http://localhost:8080/current-weather")
              }
          }
      ]
    },
    {
      label: 'Help',
      submenu:[
          {
              label: 'About',
              accelerator: process.platform == 'darwin' ? 'Command+U': 'Ctrl+U',
              click(){
                win!.loadURL("http://localhost:8080/about")
              }
          }
      ]
    }
  ]
  // Correct the macOS bug of showing 'electron' instead of the first item of the array. Just add an empty first item to the array IF on mac ('darwin').
  if(process.platform=='darwin'){
    mainMenuTemplate.unshift({})
  }
  // Show development tools only if NOT in production.
  if(process.env.NODE_ENV != 'production'){
    mainMenuTemplate.push({
      label: 'Developer',
      submenu:[
        {
          label: 'Toggle DevTools',
          accelerator: process.platform == 'darwin' ? 'Command+I': 'Ctrl+I',
          click(_item:any, focusedWindow:any){
              focusedWindow.toggleDevTools()
          }
        }
      ]
    })
  }
  return mainMenuTemplate
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

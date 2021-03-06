const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.browserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/gui-1/gui-1.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', function(){
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    app.quit()
})

app.on('activate', function(){
    if(mainWindow === null){
        createWindow()
    }
})
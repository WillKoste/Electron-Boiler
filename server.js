const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const {app, BrowserWindow, Menu} = require('electron');
const createMainWindow = require('./config/mainWindow');
const {isMac} = require('./utils/osCheck');
const menu = require('./config/mainMenu');

app.on('ready', () => {
	createMainWindow();

	const mainMenu = Menu.buildFromTemplate(menu);
	Menu.setApplicationMenu(mainMenu);
});

app.on('window-all-closed', () => {
	if (!isMac) {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createMainWindow();
	}
});

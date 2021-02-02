const path = require('path');
const {BrowserWindow} = require('electron');
const {isDev} = require('../utils/osCheck');

const createMainWindow = () => {
	const mainWindow = new BrowserWindow({
		height: 700,
		width: 800,
		icon: path.join(__dirname, '..', 'assets', 'icons', 'win', 'icon.ico'),
		title: 'Electron Boiler Template',
		backgroundColor: '#333',
		minWidth: 600,
		minHeight: 500,
		resizable: isDev && true
	});

	// mainWindow.loadURL(`https://twitter.com/explore/tabs/trending`);    Just here for reference
	mainWindow.loadFile(path.join(__dirname, '../', 'app', 'index.html'));
};

module.exports = createMainWindow;

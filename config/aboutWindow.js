const path = require('path');
const {BrowserWindow} = require('electron');

const createAboutWindow = () => {
	const aboutWindow = new BrowserWindow({
		height: 400,
		width: 400,
		icon: path.join(__dirname, '..', 'assets', 'icons', 'win', 'icon.ico'),
		title: 'Electron Boiler Template - About',
		backgroundColor: '#333',
		resizable: false
	});

	aboutWindow.loadFile(path.join(__dirname, '../', 'app', 'about.html'));
};

module.exports = createAboutWindow;

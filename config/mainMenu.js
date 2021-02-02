const {app} = require('electron');
const {isWin, isDev, isMac} = require('../utils/osCheck');
const createAboutWindow = require('../config/aboutWindow');

const menu = [
	...(isWin
		? [
				{
					label: app.name,
					submenu: [
						{
							label: 'About',
							click: () => createAboutWindow()
						}
					]
				}
		  ]
		: []),
	...(isMac ? [{role: 'appMenu'}] : []),
	{
		label: 'File',
		submenu: [
			{
				label: 'Quit',
				accelerator: 'CmdOrCtrl+W',
				click: () => app.quit()
			},
			{
				label: 'Emojis',
				click: () => app.showEmojiPanel()
			}
		]
	},
	{
		label: 'Edit',
		submenu: [{role: 'undo'}, {role: 'redo'}, {type: 'separator'}, {role: 'cut'}, {role: 'copy'}, {role: 'paste'}]
	},
	...(isDev
		? [
				{
					label: 'Developer',
					submenu: [{role: 'reload'}, {role: 'forcereload'}, {type: 'separator'}, {role: 'toggledevtools'}]
				}
		  ]
		: [])
];

module.exports = menu;

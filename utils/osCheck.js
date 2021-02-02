const isDev = process.env.NODE_ENV !== 'production' && true;
const isWin = process.platform === 'win32' && true;
const isMac = process.platform === 'darwin' && true;
const isLinux = process.platform === 'linux' && true;

module.exports = {isDev, isWin, isMac, isLinux};

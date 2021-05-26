export { error, info, warn, debug };

export default {
    info,
    warn,
    debug,
    error
}

function info (text: any) {
    console.log(`%c[INFO]: ${text}`, 'color: #7df9ff');
}

function error (text: any) {
    console.error(`[ERROR]: ${text}`);
}

function debug (text: any) {
    if (process.env.NODE_ENV === 'development') console.log(`%c[DEBUG]: ${text}`, 'color: #bada55');
}

function warn (text: any) {
    console.warn(`[WARNING]: ${text}`);
}

const os = require("os");

console.log(os.userInfo());

console.log(`The uptime of device is ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);
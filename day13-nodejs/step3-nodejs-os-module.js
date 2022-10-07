var os = require("node:os");
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.cpus()[0]);
console.log(((os.totalmem() / 1024) / 1024) / 1024, "bytes");

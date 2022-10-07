var path = require("path");
// console.log("C:\valtech\day13-nodejs\step4-nodejs-path-module.js");
// console.log(path.resolve('C://valtech/day13-nodejs/step4-nodejs-path-module.js'));
var list = ["users","guest","admin"];
var files = ["index.html","profile.html","details.html"];
// console.log(path.join(list[0], files[0]));
console.log(path.join(list[Math.floor( Math.random() * list.length) ], files[Math.floor( Math.random() * list.length)]));



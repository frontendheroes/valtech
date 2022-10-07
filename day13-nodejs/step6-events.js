const EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();
var count = 1;
let valtechHanlder = function(evt){
    console.log("valtech event happened", count, evt.time);
}
myEvent.addListener("valtech", valtechHanlder);
var si = setInterval(function(){
    myEvent.emit("valtech", {
        time : new Date().getSeconds()
    });
    count = count+1;
    console.log("event triggered")
    if(count > 5){
        myEvent.removeListener("valtech", valtechHanlder);
        clearInterval(si);
    }
},1000)
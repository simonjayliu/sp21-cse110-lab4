function currTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}


var timeSec = setInterval(currTime,1000);




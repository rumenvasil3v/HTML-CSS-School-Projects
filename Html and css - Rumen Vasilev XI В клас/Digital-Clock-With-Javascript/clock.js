const paragraph = document.querySelector('.time');
console.log(paragraph);

setInterval(() => {
    let time = new Date(2006, 06, 09);
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    // console.log(`${hour}:${minutes}:${seconds}`);
    paragraph.innerHTML = `${time}`;
}, 1000);

// function showTime() {
//     let time = new Date();
//     let hour = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();

//     hour = (hour < 10) ? '0' + hour : hour;
//     minutes = (minutes < 10) ? '0' + minutes : minutes;
//     seconds = (seconds < 10) ? '0' + seconds : seconds;
//     // console.log(`${hour}:${minutes}:${seconds}`);
//     paragraph.innerHTML = `${hour} : ${minutes} : ${seconds}`;
// }
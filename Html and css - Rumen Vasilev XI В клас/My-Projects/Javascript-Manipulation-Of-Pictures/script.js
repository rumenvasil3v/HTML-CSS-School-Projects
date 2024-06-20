const pic = document.querySelector('.media');
// console.log(pic);
const butt = document.querySelector('.btn');
// console.log(butt);
let chPicture = true;

butt.onclick = function() {

    if (chPicture) {
        pic.src = 'pictures/Untitled-2.jpg';
    } else {
        pic.src = 'pictures/bird-one.jpg';
    }

    chPicture = !chPicture;
};
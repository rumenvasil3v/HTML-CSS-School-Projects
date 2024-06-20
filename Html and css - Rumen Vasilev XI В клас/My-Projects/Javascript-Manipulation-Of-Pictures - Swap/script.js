const pic = document.querySelector('.media');

pic.onmouseover = function() {
    pic.src = 'pictures/Untitled-2.jpg';
};

pic.onmouseout = function() {
    pic.src = 'pictures/bird-one.jpg';
};
var imgArray = [
    '.LogoD.png',
    '.LogoB.png',
    './IMG/slideshowpic3.jpg',
    './IMG/slideshowpic4.jpg',
    './IMG/slideshowpic5.jpg',
    './IMG/slideshowpic6.jpg',
    './IMG/slideshowpic7.jpg',
    './IMG/slideshowpic8.jpg',
];
var curIndex = 0;
var imgDuration = 1000;

function slideShow() {
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();
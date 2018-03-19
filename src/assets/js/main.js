var fooFunc = require('./export');
fooFunc.foo();
(function () {
    var i = 0, cl = 0;
    var words = ['with JavaScript', 'or jQuery', '& hope you like it x).'];
    var output = document.querySelector('#typing h1');
    type();
    function type() {
        output.innerHTML = words[i].substring(0, cl++);
        //console.log(words[i].substring(0, cl++));
        if (cl < words[i].length + 1) {
            setTimeout(type, 120);
            //console.log("Typing");
        }
        else {
            //console.log('wait...')
            setTimeout(erase, 5000);
        }
    }
    function erase() {
        output.innerHTML = words[i].substring(0, cl--);
        if (cl >= 0) {
            setTimeout(erase, 100);
            //console.log('Deleting');
        }
        else {
            next();
        }
    }
    function next() {
        if (i < words.length) {
            i++;
            type();
            //console.log("Next");
        }
        else if (i = words.length) {
            output.innerHTML = 'Loop';
        }
    }
}());
var sliderImages = [
    {
        "name": "First image",
        "bodytext": "Some text for the first image",
        "source": "./assets/img/Slider/1.jpg"
    },
    {
        "name": "Second image",
        "bodytext": "Some text for the second image",
        "source": "./assets/img/Slider/2.jpg"
    },
    {
        "name": "Third image",
        "bodytext": "Some text for the second image",
        "source": "./assets/img/Slider/3.jpg"
    }
];
var currentImage = 0;
var bigImage = document.querySelector('#big-img img');
var big = document.querySelector('#big-img');
function getImage() {
    var image = sliderImages[currentImage];
    bigImage.src = image.source;
    big.querySelector('h2').innerHTML = image.name;
    big.querySelector('p').innerHTML = image.bodytext;
    return;
}
function removeclass() {
    bigImage.classList.remove('slide-in');
}
function sliderBtns(direction) {
    bigImage.classList.add('slide-in');
    setTimeout(removeclass, 500);
    console.log(currentImage);
    direction == 'next' ? currentImage++ : currentImage--;
    getImage();
}
getImage();


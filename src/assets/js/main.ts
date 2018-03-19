let fooFunc = require('./export');
fooFunc.foo();

(function () {
    let i: number = 0,
        cl: number = 0;
    const words: Array<string>  = ['with JavaScript', 'or jQuery', '& hope you like it x).'];
    const output = document.querySelector('#typing h1');

    type();

    function type(){
      output.innerHTML = words[i].substring(0, cl++);
      //console.log(words[i].substring(0, cl++));
      if(cl < words[i].length+1) {
        setTimeout(type, 120);
        //console.log("Typing");
      }
      else {
        //console.log('wait...')
        setTimeout(erase, 5000);
      }
    }

    function erase(){
       output.innerHTML = words[i].substring(0, cl--);
       if(cl >= 0) {
          setTimeout(erase, 100);
          //console.log('Deleting');
        }
        else {
            next();
        }
    }
    function next() {
      if (i < words.length){
        i++;
        type();
        //console.log("Next");
      }
      else if (i = words.length) {
        output.innerHTML = 'Loop';
      }
    }
}());

let sliderImages =
  [
    {
      "name":"First image",
      "bodytext":"Some text for the first image",
      "source":"./assets/img/Slider/1.jpg"
    },
    {
      "name":"Second image",
      "bodytext":"Some text for the second image",
      "source":"./assets/img/Slider/2.jpg"
    },
    {
    "name":"Third image",
    "bodytext":"Some text for the second image",
    "source":"./assets/img/Slider/3.jpg"
    }
  ];

  let currentImage = 0;
  let bigImage = document.querySelector('#big-img img');
  let big = document.querySelector('#big-img');

  function getImage(){

    let image = sliderImages[currentImage];
    bigImage.src = image.source;
    big.querySelector('h2').innerHTML = image.name;
    big.querySelector('p').innerHTML = image.bodytext;

    return;
  }

  function removeclass() {
    bigImage.classList.remove('slide-in')
  }

  function sliderBtns(direction: string) {
    bigImage.classList.add('slide-in');
    setTimeout(removeclass, 500);
    console.log(currentImage);
    direction == 'next' ? currentImage++ : currentImage--;

    getImage();
  }

  getImage();


// Newsletter Subscribe Plugin
(function(){
  function getUserEmail() {
      if(sessionStorage) {
          let currentUserEmail = document.querySelector('#email').value;
          sessionStorage.setItem('userEmail', currentUserEmail);
      } else {
          console.log("Sorry, your browser does not support web storage...");
      }
  }
  function getNewsletterUserInput(){
      if(sessionStorage) {
          document.querySelector('#newsletterSubscribe-text-3').value = sessionStorage.getItem('userEmail');
          document.querySelector("input[value=daily]").checked = true;
      } else {
          console.log("Sorry, your browser does not support web storage...");
      }
  }
  setTimeout(getNewsletterUserInput(), 200);
}());
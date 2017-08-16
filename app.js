'use strict'

var allItems = [];

function Item ( displayName, filePath, id ){

    this.displayName = displayName;
    this.filePath = filePath;
    this.displayCount = 0;
    this.voteCount = 0;
    this.id = displayName;

    allItems.push( this );
}

var bag = new Item('bag', 'images/bag.jpg');
var banana = new Item('banana', 'images/banana.jpg');
var bathroom = new Item('bathroom', 'images/bathroom.jpg');
var boots = new Item('boots', 'images/boots.jpg');
var breakfast = new Item('breakfast', 'images/breakfast.jpg');
var bubblegum = new Item('bubblegum', 'images/bubblegum.jpg' );
var chair = new Item('chair', 'images/chair.jpg' );
var cthulhu = new Item('cthulhu', 'images/cthulhu.jpg' );
var dogDuck = new Item('dog-duck', 'images/dog-duck.jpg' );
var dragon = new Item('dragon', 'images/dragon.jpg' );
var pen = new Item('pen', 'images/pen.jpg' );
var petSweep = new Item('pet-sweep', 'images/pet-sweep.jpg' );
var scissors = new Item('scissors', 'images/scissors.jpg' );
var shark = new Item('shark', 'images/shark.jpg' );
var sweep = new Item('sweep', 'images/sweep.png' );
var tauntaun = new Item('tauntaun', 'images/tauntaun.jpg' );
var unicorn = new Item('unicorn', 'images/unicorn.jpg' );
var usb = new Item('usb', 'images/usb.gif' );
var waterCan = new Item('water-can', 'images/water-can.jpg' );
var wineGlass = new Item('wine-glass', 'images/wine-glass.jpg' );

var randomImage = function() {
    var numberItem = Math.floor (Math.random() * (allItems.length));
    return allItems[numberItem].filePath;
} 

var images = [];
var usedImages =[];

var checkImages = function(){
    usedImages = images;
    images = [];
    do {
        var imgPath = randomImage();
        if (!images.includes(imgPath)
            && !usedImages.includes(imgPath)){
            images.push(imgPath);
        }
    } while (images.length < 3);
    return images;
}

function addToCount(filePath) {
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i]['filePath'] === filePath) {
            console.log(i);
            return i;
        }
    }
    return null;
}

var displayImage = function(){
    checkImages();
    
    var elImage1 = document.getElementById('first');
    elImage1.setAttribute('src', images[0]);
    elImage1.setAttribute('dataPath', images[0]);
    allItems[addToCount(images[0])].displayCount++;
    console.log(allItems[addToCount(images[0])].displayCount);

    var elImage2 = document.getElementById('second');
    elImage2.setAttribute('src', images[1]);
    elImage2.setAttribute('dataPath', images[1]);
    allItems[addToCount(images[1])].displayCount++;
    console.log(allItems[addToCount(images[0])].displayCount);
    
    var elImage3 = document.getElementById('third');
    elImage3.setAttribute('src', images[2]);
    elImage3.setAttribute('dataPath', images[2]);
    allItems[addToCount(images[2])].displayCount++;
    console.log(allItems[addToCount(images[0])].displayCount);
}


var survey = document.getElementById('survey');
survey.addEventListener('click', voteHandler);

function voteHandler(event){
    var clickedEl = event.target;
    var vote = clickedEl.getAttribute('dataPath');
    allItems[addToCount(vote)].displayCount++;
    console.log(allItems[addToCount(vote)].displayCount);
    displayImage();

    
    // console.log(clickedEl.id);
    // console.log(clickedEl.src);
    // console.log(clickedEl.getAttribute('dataPath'));
}

displayImage();


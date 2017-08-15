'use strict'

var allItems = [];

function Item ( displayName, filePath, displayCount, voteCount, id ){

    this.displayName = displayName;
    this.filePath = filePath;
    this.displayCount = 0;
    this.voteCount = 0;
    this.id = id;

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

var displayImage = function(){
    
    var elImage1 = document.getElementById('first');
    elImage1.setAttribute('src', randomImage());
    
    var elImage2 = document.getElementById('second');
        if (randomImage() === 'first') { randomImage()
        }
        else {elImage2.setAttribute('src', randomImage())
        };
    
    var elImage3 = document.getElementById('third');
        if (randomImage() === 'first' || (randomImage() === 'second')) {randomImage()};
        elImage3.setAttribute('src', randomImage())
}

// count: function(voteCount){
//     voteCount += 1;

//     var selectItems = allItems[voteCount.getAttribute( 'src')];
//     selectItems.count++;
// }

//     var el = document.getElementsByTagName('img');
//     el.addEventListener('click', count());



displayImage();
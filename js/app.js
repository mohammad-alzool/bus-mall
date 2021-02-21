'use strict';
let counter=25;
const names = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
];

const rightImage = document.getElementById('right-image');
const centerImage = document.getElementById('center-image');
const leftImage = document.getElementById('left-image');
const imagesSection = document.getElementById('images-section');
const resultsBot = document.getElementById('View-Results');

// console.log(leftImage);
// const Items = [];
function Item(name) {
  this.name = name;
  this.path = `./img/${name}`;
  this.votes = 0;
  this.views = 0;
  //Items.push(this);
  Item.all.push(this);
}
Item.all = [];
for (let i = 0; i < names.length; i++) {
  new Item(names[i]);
}
// console.table(Item.all);
function render() {
  const leftIndex = randomNumber(0, Item.all.length - 1);
  // console.log('LEFT', leftIndex, Item.all[leftIndex].path);
  leftImage.src = Item.all[leftIndex].path;
  leftImage.title = Item.all[leftIndex].name;
  leftImage.alt = Item.all[leftIndex].name;
  leftImage.views = Item.all[leftIndex].views++;

  const rightIndex = randomNumber(0, Item.all.length - 1);
  // console.log('Right', rightIndex, Item.all[leftIndex].path);
  rightImage.src = Item.all[rightIndex].path;
  rightImage.title = Item.all[rightIndex].name;
  rightImage.alt = Item.all[rightIndex].name;
  rightImage.views =Item.all[rightIndex].views++;
  const centerIndex = randomNumber(0, Item.all.length - 1);
  // console.log('center', centerIndex, Item.all[leftIndex].path);
  centerImage.src = Item.all[centerIndex].path;
  centerImage.title = Item.all[centerIndex].name;
  centerImage.alt = Item.all[centerIndex].name;
  centerImage.views = Item.all[centerIndex].views++;
}
imagesSection.addEventListener('click', handleClick);


function handleClick(event) {
  // console.log('Target', event.target.id);
  if (event.target.id !== 'images-section') {
    for (let i = 0; i < Item.all.length; i++) {
      if (Item.all[i].name === event.target.title) {
        Item.all[i].votes++;
        // Item.all[i].votes = Item.all[i].votes + 1;
      }
      if (!counter) {
        resultsBot.addEventListener('click', handleButton);
        imagesSection.removeEventListener('click', handleClick);

      }
    }
  }
  // console.table(Item.all);
  render();
  counter--;
}

//helper functions

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
render();

function handleButton(event) {
  resultsBot.removeEventListener('click', handleButton);
  console.log(event.target.id);
  const listSection = document.getElementById('results');
  const ulSection = document.createElement('ul');
  listSection.appendChild(ulSection);
  for (let i = 0; i < Item.all.length; i++) {
    const liEl = document.createElement('li');
    ulSection.appendChild(liEl);
    liEl.textContent = `${Item.all[i].name.toUpperCase()} had ${Item.all[i].votes} votes with ${Item.all[i].views} views`;
  }}

const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
];

// JS에서 HTML 태그 추가하기 
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgimg = document.createElement('img');
bgimg.src = `img/${chosenImg}`;


document.body.prepend(bgimg);
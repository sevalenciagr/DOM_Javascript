function changeColor(newColor) {
    const elem = document.getElementById('para');
    elem.style.color = newColor;
  }
  
let firstHeading = document.querySelector('h1');

console.log(firstHeading);

// const btnReadMore = document.getElementById('btnReadMore');


// btnReadMore.append(img2);


const RMpSectionB = document.getElementById('RMpSectionB');
const btnReadMore = document.querySelector('#btnReadMore');
const img2 = document.createElement('img');

img2.setAttribute('src', 'https://www.dsbnoticias.com/wp-content/uploads/2022/09/NASA-ASTEROIDE-1024x683.png');

function bntReadmoreOnClick(){
  RMpSectionB.append(img2);
}

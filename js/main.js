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

//Codigo Jeferson.
const RMpSectionA = document.getElementById('RMpSectionA');
const RMpSectionD = document.getElementById('RMpSectionD');
const btnclickestrella = document.querySelector('#btnclickestrella');
const btnclickestrellaexplota = document.querySelector('#btnclickestrellaexplota');
const text = document.createTextNode('Una estrella es un esferoide luminoso que mantiene su forma debido a su propia gravedad. La estrella más cercana a la Tierra es el Sol. Otras estrellas son visibles a simple vista desde la Tierra durante la noche, apareciendo como una diversidad de puntos luminosos aparentemente fijos en el cielo debido a su inmensa distancia de la misma.');
const text2 = document.createTextNode(' Durante al menos una parte de su vida, una estrella brilla debido a la fusión termonuclear del hidrógeno en helio en su núcleo, que libera energía, la cual atraviesa el interior de la estrella y, después, se irradia hacia el espacio exterior. Casi todos los elementos naturales más pesados que el helio se crean por nucleosíntesis estelar durante la vida de una estrella y, en algunas de ellas, por nucleosíntesis de supernova cuando explotan.');

 function bntclickestrellaOnClick(){
    RMpSectionC.append(text);  
    RMpSectionC.append(text2);

    //  console.log(pid);
    //  pid.append(img4);
}

const RMpSectionC = document.getElementById('RMpSectionC');
const btnfotoestrella = document.querySelector('#btnfotoestrella');
const img3 = document.createElement('img');

img3.setAttribute('src', 'https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release_0.png');

 function bntfotoestrellaOnClick(){
   RMpSectionB.append(img3);
}


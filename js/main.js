const participants = [
  {
    name: 'Juan Felipe Ospina',
    repo: 'https://github.com/JuanfeOspiJara',
  },
  {
    name: 'Maria Camila Betancourth',
    repo: 'https://github.com/maria-betancourth',
  },
  {
    name: 'Sebastian Valencia',
    repo: 'https://github.com/sevalenciagr',
  },
  {
    name: 'Camilo Andres Giraldo',
    repo: 'https://github.com/CamiloGiraldoM',
  },
  {
    name: 'Monica Rios',
    repo: 'https://github.com/Moni2025',
  },
    {
      name: 'Jeferson Hernandez',
      repo:'https://github.com/jeferson-hernandez08',
    },
    {
      name: 'Harold Villa',
      repo: 'https://github.com/haroldjvilla',
    },
    {
      name: 'Camila Arcineaga',
      repo: 'https://github.com/amcamila27',
    }

];

const participantList = document.querySelector('#participants');

participants.forEach(participant => {
  const a = document.createElement('a');
  a.innerText = participant.name;
  a.href = participant.repo;

  const li = document.createElement('li');
  li.append(a);

  participantList.append(li);
});

function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

  
let firstHeading = document.querySelector('h1');
console.log(firstHeading);

// const participante1 = document.querySelector('.participante1');
// const participante2 = document.querySelector('.participante2');
// const participante3 = document.querySelector('.participante3');
// const participante4 = document.querySelector('.participante4');
// const participante5 = document.querySelector('.participante5');



/* Acá empiezan los datos del participante 1 */
// const a = document.createElement('a');
// a.setAttribute('href', 'https://github.com/JuanfeOspiJara');
// participante1.append(a);
// a.innerText = 'Juan Felipe Ospina'

// const img = document.createElement('img');
// img.setAttribute('src', 'imagenes/logogit.png');
// img.setAttribute('class','logo-git');
// participante1.append(img);
// /* Acá terminan los datos del participante 1*/


// /* Acá empiezan los datos del participante 2 */
// const a1 = document.createElement('a');
// a1.setAttribute('href', 'https://github.com/maria-betancourth');
// participante2.append(a1);

// const img1 = document.createElement('img');
// img1.setAttribute('src', 'imagenes/logogit.png');
// img1.setAttribute('class','logo-git');
// participante2.append(img1);
// a1.innerText = 'Maria Camila Ospina'
// /* Acá terminan los datos del participante 2 */

// /* Acá empiezan los datos del participante 3 */
// const a2 = document.createElement('a');
// a2.setAttribute('href', 'https://github.com/sevalenciagr');
// participante3.append(a2);

// const img2 = document.createElement('img');
// img2.setAttribute('src', 'imagenes/logogit.png');
// img2.setAttribute('class','logo-git');
// participante3.append(img2);
// a2.innerText = 'Sebastian Valencia'
// /* Acá terminan los datos del participante 3 */



// const btnReadMore = document.getElementById('btnReadMore');


// btnReadMore.append(img2);


const RMpSectionB = document.getElementById('RMpSectionB');
const btnReadMore = document.querySelector('#btnReadMore');
const img2 = document.createElement('img');
const imgText = document.getElementById('textOnClick');

img2.setAttribute('src', 'https://www.dsbnoticias.com/wp-content/uploads/2022/09/NASA-ASTEROIDE-1024x683.png');
img2.setAttribute('class', 'img');

// Agregando imagen y texto despues de Onclick en el boton readme
function bntReadmoreOnClick(){
RMpSectionB.append(img2);
imgText.innerText = "Armageddon es una película de ciencia ficción y cine catástrofe de 1998, dirigida por Michael Bay, producida por Jerry Bruckheimer y protagonizada por Bruce Willis, Billy Bob Thornton, Ben Affleck, Liv Tyler, Owen Wilson, Will Patton, Michael Clarke Duncan, Peter Stormare y Steve Buscemi. La película trata sobre un grupo de perforadores de plataformas petrolíferas que son enviados por la NASA a un enorme asteroide que amenaza el planeta Tierra con la idea de taladrar su superficie y poder destruirlo con una bomba nuclear."
}

//Codigo Jeferson.
const RMpSectionA = document.getElementById('RMpSectionA');
const btnclickestrella = document.querySelector('#btnclickestrella');
const text = document.createTextNode('Una estrella es un esferoide luminoso que mantiene su forma debido a su propia gravedad. La estrella más cercana a la Tierra es el Sol. Otras estrellas son visibles a simple vista desde la Tierra durante la noche, apareciendo como una diversidad de puntos luminosos aparentemente fijos en el cielo debido a su inmensa distancia de la misma.');
const text2 = document.createTextNode(' Durante al menos una parte de su vida, una estrella brilla debido a la fusión termonuclear del hidrógeno en helio en su núcleo, que libera energía, la cual atraviesa el interior de la estrella y, después, se irradia hacia el espacio exterior. Casi todos los elementos naturales más pesados que el helio se crean por nucleosíntesis estelar durante la vida de una estrella y, en algunas de ellas, por nucleosíntesis de supernova cuando explotan.');

function bntclickestrellaOnClick(){
  RMpSectionC.append(img3);
  RMpSectionC.append(text);  
  RMpSectionC.append(text2);
  


  //  console.log(pid);
  //  pid.append(img4);
}

const RMpSectionC = document.getElementById('RMpSectionC');
const btnfotoestrella = document.querySelector('#btnfotoestrella');
const img3 = document.createElement('img');


img3.setAttribute('src', 'https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release_0.png');
img3.setAttribute('class', 'img');



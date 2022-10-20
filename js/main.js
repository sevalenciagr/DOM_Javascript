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

const image = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');

const nomeDeErrp = document.getElementById('nomeDoPersonagem');
const nomeDeErrp2 = document.getElementById('nomeDoPersonagem2');
const nomeDeErrp3 = document.getElementById('nomeDoPersonagem3');
const nomeDeErrp4 = document.getElementById('nomeDoPersonagem4');

const button = document.querySelector('button');


const numeroMaximoDePersonagens = 671;
let points = 0;

let nomeDoPersonagem;



generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image.src = data.image;
        image.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem = data.name;
        nomeDeErrp.innerHTML = nomeDoPersonagem
    })
}

getCharacter2 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        image2.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem2 = data.name;
        nomeDeErrp2.innerHTML = nomeDoPersonagem2
    })
}

getCharacter3 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        image3.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem3 = data.name;
        nomeDeErrp3.innerHTML = nomeDoPersonagem3
    })
}

getCharacter4 = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        image4.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem4 = data.name;
        nomeDeErrp4.innerHTML = nomeDoPersonagem4
    })
}


window.onload = function () {
    this.getCharacter();
    this.getCharacter2();
    this.getCharacter3();
    this.getCharacter4();
}

recarregar = () => {
    this.getCharacter();
    this.getCharacter2();
    this.getCharacter3();
    this.getCharacter4();
}

button.onclick = recarregar;


    
    
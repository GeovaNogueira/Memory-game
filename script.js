let order = [];
let clickedOrder = [];
let score = 0;


const capitain = document.querySelector('.capitain');
const capitao = document.querySelector('.capitao');
const doutor = document.querySelector('.doutor');
const drax = document.querySelector('.drax');
const falcon = document.querySelector('.falcon');
const feiticeira = document.querySelector('.feiticeira');
const gamora = document.querySelector('.gamora');
const gaviao = document.querySelector('.gaviao');
const groot = document.querySelector('.groot');
const ferro = document.querySelector('.ferro');
const formiga = document.querySelector('.formiga');
const aranha = document.querySelector('.aranha');
const hulk = document.querySelector('.hulk');
const loki = document.querySelector('.loki');
const maquina = document.querySelector('.maquina');
const pantera = document.querySelector('.pantera');
const peter = document.querySelector('.peter');
const rocket = document.querySelector('.rocket');
const thor = document.querySelector('.thor');
const visao = document.querySelector('.visao');
const viuva = document.querySelector('.viuva');

//cria ordem aletoria de personagens
let shuffleOrder = () => {
    let marvelOrder = Math.floor(Math.random() * (21));
    order[order.length] = marvelOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementMarvel = createMarvelElement(order[i]);
        lightMarvel(elementMarvel, Number(i) + 1);
    }
}

//acende o proximo personagem
let lightMarvel = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (marvel) => {
    clickedOrder[clickedOrder.length] = marvel;
    createMarvelElement(marvel).classList.add('selected');

    setTimeout(() => {
        createMarvelElement(marvel).classList.remove('selected');
        checkOrder();
    }, 250);
}

let createMarvelElement = (marvel) => {
    if (marvel == 0) {
        return capitain;
    } else if (marvel == 1) {
        return capitao;
    } else if (marvel == 2) {
        return doutor;
    } else if (marvel == 3) {
        return drax;
    } else if (marvel == 4) {
        return falcon;
    } else if (marvel == 5) {
        return feiticeira;
    } else if (marvel == 6) {
        return gamora;
    } else if (marvel == 7) {
        return gaviao;
    } else if (marvel == 8) {
        return groot;
    } else if (marvel == 9) {
        return ferro;
    } else if (marvel == 10) {
        return formiga;
    } else if (marvel == 11) {
        return aranha;
    } else if (marvel == 12) {
        return hulk;
    } else if (marvel == 13) {
        return loki;
    } else if (marvel == 14) {
        return maquina;
    } else if (marvel == 15) {
        return pantera;
    } else if (marvel == 16) {
        return peter;
    } else if (marvel == 17) {
        return rocket;
    } else if (marvel == 18) {
        return thor;
    } else if (marvel == 19) {
        return visao;
    } else if (marvel == 20) {
        return viuva;
    }

}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de cliques para os personagens
capitain.onclick = () => click(0);
capitao.onclick = () => click(1);
doutor.onclick = () => click(2);
drax.onclick = () => click(3);
falcon.onclick = () => click(4);
feiticeira.onclick = () => click(5);
gamora.onclick = () => click(6);
gaviao.onclick = () => click(7);
groot.onclick = () => click(8);
ferro.onclick = () => click(9);
formiga.onclick = () => click(10);
aranha.onclick = () => click(11);
hulk.onclick = () => click(12);
loki.onclick = () => click(13);
maquina.onclick = () => click(14);
pantera.onclick = () => click(15);
peter.onclick = () => click(16);
rocket.onclick = () => click(17);
thor.onclick = () => click(18);
visao.onclick = () => click(19);
viuva.onclick = () => click(20);


//inicio do jogo
playGame();
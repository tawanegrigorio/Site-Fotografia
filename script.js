const fotos = document.querySelectorAll(".foto-quem");
const bolinhas = document.querySelectorAll(".bolinha");

let fotoAtual = 0;

function mudarFoto(index) {

    fotos.forEach((foto) => {
        foto.classList.remove("ativa");
    });

    bolinhas.forEach((bolinha) => {
        bolinha.classList.remove("ativa");
    });

    fotos[index].classList.add("ativa");
    bolinhas[index].classList.add("ativa");

    fotoAtual = index;
}

setInterval(() => {

    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    mudarFoto(fotoAtual);

}, 5000);


bolinhas.forEach((bolinha, index) => {

    bolinha.addEventListener("click", () => {
        mudarFoto(index);
    });

});
const slidePacotes = document.querySelector(".slide2");
const pacotes = document.querySelectorAll("#pacote");

let pacoteAtual = 0;

function mostrarPacote() {

    const largura = pacotes[0].offsetWidth;
    const margem = 20;
    const distancia = largura + margem;

    slidePacotes.style.transform =
        `translateX(-${pacoteAtual * distancia}px)`;
}

setInterval(() => {

    pacoteAtual++;

    if (pacoteAtual >= pacotes.length) {
        pacoteAtual = 0;
    }

    mostrarPacote();

}, 5000);


function enviar() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const numero = "5588981663525";

    const texto =
        `Olá, Sandy! Meu nome é ${nome}. Meu e-mail é ${email}. ${mensagem}`;

    const link =
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
}

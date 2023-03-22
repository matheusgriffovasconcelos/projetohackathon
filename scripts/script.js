const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const proximaturma = document.getElementById('proximaturma');

// Define a data de destino
const dataDestino = new Date("2023-09-15T00:00:00").getTime();

const relogio = setInterval(function time() {
  // Obtém a data e hora atual
  const atual = new Date().getTime();

  // Calcula a diferença entre a data atual e a data de destino
  const distancia = dataDestino - atual;

  // Calcula dias, horas, minutos e segundos restantes
  const days = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distancia % (1000 * 60)) / 1000);

  // Exibe o resultado nos elementos correspondentes
  dias.textContent = days;
  horas.textContent = hours;
  minutos.textContent = minutes;
  segundos.textContent = seconds;

  // Quando a contagem regressiva terminar, para o relógio
  if (distancia < 0) {
    clearInterval(relogio);
  }
}, 1000);



// Selecionar os elementos da barra de acessibilidade
const accessibilityBar = document.querySelector('.accessibility-bar');
const increaseFontSizeButton = document.querySelector('#increase-font-size');
const decreaseFontSizeButton = document.querySelector('#decrease-font-size');
const highContrastModeButton = document.querySelector('#high-contrast-mode');

// Verificar se as preferências do usuário já estão armazenadas no LocalStorage
if (localStorage.getItem('highContrastMode')) {
  document.documentElement.classList.add('high-contrast');
  highContrastModeButton.textContent = 'Desativar alto contraste';
}

if (localStorage.getItem('largeFont')) {
  document.documentElement.classList.add('large-font');
}

// Adicionar eventos aos botões
increaseFontSizeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('large-font');
  localStorage.setItem('largeFont', document.documentElement.classList.contains('large-font'));
});

decreaseFontSizeButton.addEventListener('click', () => {
  document.documentElement.classList.remove('large-font');
  localStorage.removeItem('largeFont');
});

highContrastModeButton.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
  // document.body.style.textAlign('center');
  if (document.body.classList.contains('high-contrast')) {
    // highContrastModeButton.textContent = 'Desativar alto contraste';
    localStorage.setItem('highContrastMode', true);
  } else {
    // highContrastModeButton.textContent = 'Ativar alto contraste';
    localStorage.removeItem('highContrastMode');
  }
});



//Elementos de formulário
const envia_formulario = document.querySelector('#envia_form');

envia_formulario.addEventListener('click', function () {
  const ideia_formulario = document.getElementById('ideia_form');
  const nome_formulario = document.getElementById('nome_form');
  const cidade_formulario = document.getElementById('cidade_form');
  const titulo_formulario = document.getElementById('titulo_form');

  const valor_ideia = ideia_formulario.value;
  const valor_nome = nome_formulario.value;
  const valor_cidade = cidade_formulario.value;
  const valor_titulo = titulo_formulario.value;

  envia_formulario.setAttribute('href', 'mailto:contato@reprograme-se.org.br?subject=' + valor_titulo + '&body=' + valor_ideia + "%0A%0A" + valor_nome + "%0A" + valor_cidade)
})




// Array de eventos com datas e informações
let eventos = [
  {
    data: "2023-09-08",
    evento: "Nova Turma Reprograme-se",
    local: "Cachoeiro de Itapemirim - ES"
  },
  {
    data: "2023-04-22",
    evento: "Evento Act!on",
    local: "Vitória - ES"
  },
  {
    data: "2023-07-12",
    evento: "Hackathon FIC II",
    local: "Online"
  }
];

// Seleciona o elemento tbody da tabela
let tbody = document.querySelector("tbody");

// Para cada evento, adiciona uma nova linha na tabela
eventos.forEach(function (evento) {
  // Cria uma nova linha
  let novaLinha = document.createElement("tr");

  // Adiciona as células da linha com os dados do evento
  let dataCelula = document.createElement("td");
  dataCelula.textContent = evento.data;
  novaLinha.appendChild(dataCelula);

  let eventoCelula = document.createElement("td");
  eventoCelula.textContent = evento.evento;
  novaLinha.appendChild(eventoCelula);


  let localCelula = document.createElement("td");
  localCelula.textContent = evento.local;
  novaLinha.appendChild(localCelula);

  // Adiciona a nova linha ao tbody da tabela
  tbody.appendChild(novaLinha);
});










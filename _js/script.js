// Lista de curiosidades da Fórmula 1
const curiosidades = [
    "O carro de F1 pode ir de 0 a 100 km/h em apenas 2,5 segundos!",
    "O volante de um carro de F1 pode custar até 50 mil dólares.",
    "O peso mínimo de um carro de F1 é cerca de 798 kg.",
    "Os pilotos perdem até 3 kg de peso em uma única corrida!",
    "Os freios de F1 chegam a temperaturas de mais de 1000°C.",
    "A Fórmula 1 existe desde 1950.",
    "A velocidade máxima registrada em uma corrida de F1 é de 372,6 km/h.",
    "Os pneus de F1 são trocados em menos de 3 segundos durante um pit stop.",
    "A aerodinâmica é crucial: até 50% da força que mantém o carro na pista vem das asas.",
    "O piloto mais jovem a vencer uma corrida de F1 foi Max Verstappen, aos 18 anos.",
    "A Ferrari é a equipe mais antiga e bem-sucedida da F1, com mais de 230 vitórias.",
    "A Ferrari é conhecida por sua icônica pintura vermelha e sua rica história nas pistas."
];

// Selecionando elementos HTML
const botao = document.getElementById("botao"); // Botão na página
const curiosidadeTexto = document.getElementById("curiosidade"); // Parágrafo onde aparece a curiosidade

// Evento de clique no botão
// Ajuda de ChatGPT neste trecho
botao.addEventListener("click", () => {
    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    curiosidadeTexto.textContent = curiosidades[aleatorio];
});
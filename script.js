// Áudios de feedback
const correctSound = new Audio('audios/certa.mp3'); // Som de resposta certa
const wrongSound = new Audio('audios/errada.mp3'); // Som de resposta errada

// Variável global para o áudio da pergunta atual
let currentQuestionAudio = null;

// Função para reproduzir o som com base na resposta
function playFeedbackSound(isCorrect) {
    if (isCorrect) {
        correctSound.play(); // Toca o som de resposta certa
    } else {
        wrongSound.play(); // Toca o som de resposta errada
    }
}

// Dados do Quiz (suas perguntas)
const quizData = {
    questions: [
    // Perguntas 1 a 26 (já existentes)
        
        {
            question: "Agarrar os joelhos e posicionar os pés em arranque indica que a pessoa está:",
            image: "imagens/imagem2.jpg",
            audio: "audios/audio1.mp3",
            options: [
                "Pronta para partir",
                "Confortável",
                "Insegura",
                "Confiante"
            ],
            correctAnswer: 0
        },
        {
            question: "O que significa quando alguém está com as pernas cruzadas em uma conversa?",
            image: "imagens/imagem3.jpg",
              audio: "audios/audio2.mp3",
            options: [
                "Conforto e relaxamento",
                "Insegurança",
                "Falta de interesse",
                "Intenção de dominar a conversa"
            ],
            correctAnswer: 0
        },
        {
            question: "Quando alguém afasta o joelho durante uma conversa, isso pode significar:",
            image: "imagens/imagem4.jpg",
              audio: "audios/audio3.mp3",
            options: [
                "Sinal de fechamento",
                "Sinal de abertura e conforto",
                "Ansiedade",
                "Confiança excessiva"
            ],
            correctAnswer: 1
        },
        {
            question: "Limpar as mãos nas pernas é um comportamento frequentemente associado a:",
            image: "imagens/imagem5.jpg",
              audio: "audios/audio4.mp3",
            options: [
                "Confiança",
                "Estresse ou ansiedade",
                "Falta de interesse",
                "Controle da situação"
            ],
            correctAnswer: 1
        },
        {
            question: "O encolhimento parcial dos ombros pode indicar:",
            image: "imagens/imagem6.jpg",
              audio: "audios/audio5.mp3",
            options: [
                "Falta de interesse",
                "Confiança",
                "Insegurança ou dúvida",
                "Desejo de se afastar"
            ],
            correctAnswer: 2
        },
        {
            question: "Quando alguém encolhe completamente os ombros, isso geralmente significa:",
            image: "imagens/imagem7.jpg",
              audio: "audios/audio6.mp3",
            options: [
                "Falta de interesse",
                "Falta de compromisso",
                "A pessoa não sabe ou não tem certeza",
                "A pessoa está afirmando algo com confiança"
            ],
            correctAnswer: 2
        },
        {
            question: "Esparramar-se é mais aceitável:",
            image: "imagens/imagem8.jpg",
              audio: "audios/audio7.mp3",
            options: [
                "Quando a pessoa está em seu próprio espaço",
                "Quando se está tentando controlar a conversa",
                "Quando a pessoa está tentando agradar alguém",
                "Durante uma reunião de negócios"
            ],
            correctAnswer: 0
        },
        {
            question: "Os braços esparramados sobre outras cadeiras podem indicar que a pessoa está:",
            image: "imagens/imagem9.jpg",
              audio: "audios/audio8.mp3",
            options: [
                "Insegura",
                "Confortável e confiante",
                "Tentando controlar a situação",
                "Ansiosa ou nervosa"
            ],
            correctAnswer: 1
        },
        {
            question: "Colocar as mãos na cintura com os polegares para trás é um sinal de:",
            image: "imagens/imagem10.jpg",
              audio: "audios/audio9.mp3",
            options: [
                "Conforto",
                "Autoridade e domínio",
                "Falta de interesse",
                "Dúvida"
            ],
            correctAnswer: 1
        },
        {
            question: "Quando alguém coloca os polegares para frente na cintura, a postura é mais:",
            image: "imagens/imagem11.jpg",
              audio: "audios/audio10.mp3",
            options: [
                "Autoritária",
                "Questionadora ou inquisidora",
                "Relaxada",
                "Desinteressada"
            ],
            correctAnswer: 1
        },
        {
            question: "Colocar as mãos entrelaçadas atrás da cabeça é uma demonstração de:",
            image: "imagens/imagem12.jpg",
              audio: "audios/audio11.mp3",
            options: [
                "Insegurança",
                "Conforto e domínio",
                "Desinteresse",
                "Tentativa de se afastar"
            ],
            correctAnswer: 1
        },
        {
            question: "Plantar os dedos espalhados sobre uma superfície é um claro sinal de:",
            image: "imagens/imagem13.jpg",
              audio: "audios/audio12.mp3",
            options: [
                "Confiança e autoridade",
                "Conforto",
                "Ansiedade",
                "Falta de respeito"
            ],
            correctAnswer: 0
        },

        // Perguntas 14 a 26 (já existentes)

        {
            question: "O que a postura de 'torre com as mãos' demonstra?",
            image: "imagens/imagem14.jpg",
              audio: "audios/audio13.mp3",
            options: [
                "Nervosismo",
                "Falta de interesse",
                "Insegurança",
                "Confiança e foco"
            ],
            correctAnswer: 3
        },
        {
            question: "Os polegares para cima são associados a...?",
            image: "imagens/imagem15.jpg",
              audio: "audios/audio14.mp3",
            options: [
                "Indecisão",
                "Confiança naquele momento",
                "Desinteresse",
                "Dúvida"
            ],
            correctAnswer: 1
        },
        {
            question: "O que significa os polegares apontando para baixo em uma conversa?",
            image: "imagens/imagem16.jpg",
              audio: "audios/audio15.mp3",
            options: [
                "Falta de confiança e/ou ênfase",
                "Foco",
                "Entusiasmo",
                "Confiança"
            ],
            correctAnswer: 0
        },
        {
            question: "Quando alguém esconde os polegares, qual é a mensagem transmitida?",
            image: "imagens/imagem17.jpg",
              audio: "audios/audio16.mp3",
            options: [
                "Interesse na conversa",
                "Distração",
                "Insegurança",
                "Confiança e credibilidade"
            ],
            correctAnswer: 2
        },
        {
            question: "Esfregar as mãos rapidamente é um sinal de...?",
            image: "imagens/imagem18.jpg",
              audio: "audios/audio17.mp3",
            options: [
                "Alívio do estresse",
                "Desinteresse",
                "Nervosismo",
                "Confiança"
            ],
            correctAnswer: 0
        },
        {
            question: "Confranger as mãos é uma demonstração de...?",
            image: "imagens/imagem19.jpg",
              audio: "audios/audio18.mp3",
            options: [
                "Interesse no assunto",
                "Entusiasmo",
                "Preocupação ou ansiedade",
                "Confiança"
            ],
            correctAnswer: 2
        },
        {
            question: "Esfregar os dedos entrelaçados e esticados pode significar...?",
            image: "imagens/imagem20.jpg",
              audio: "audios/audio19.mp3",
            options: [
                "Autoconfiança",
                "Concentração",
                "Alto nível de ansiedade ou desconforto",
                "Entusiasmo"
            ],
            correctAnswer: 2
        },
        {
            question: "Inclinar a cabeça indica...?",
            image: "imagens/imagem21.jpg",
              audio: "audios/audio20.mp3",
            options: [
                "Receptividade e conforto",
                "Desconfiança",
                "Dúvida",
                "Insegurança"
            ],
            correctAnswer: 0
        },
        {
            question: "Tocar no pescoço demonstra o quê?",
            image: "imagens/imagem22.jpg",
            options: [
                "Dúvida ou insegurança",
                "Conforto emocional",
                "Confiança",
                "Interesse"
            ],
            correctAnswer: 0
        },
        {
            question: "Cobrir a covinha do pescoço pode significar...?",
            image: "imagens/imagem23.jpg",
            options: [
                "Medo ou insegurança",
                "Interesse na conversa",
                "Concentração",
                "Felicidade"
            ],
            correctAnswer: 0
        },
        {
            question: "O que os gestos de bloquear os olhos geralmente indicam?",
            image: "imagens/imagem24.jpg",
            options: [
                "Alegria",
                "Concentração",
                "Interesse",
                "Desagrado ou desconforto"
            ],
            correctAnswer: 3
        },
        {
            question: "Tocar nos olhos durante uma conversa pode significar...?",
            image: "imagens/imagem25.jpg",
            options: [
                "Confiança",
                "Necessidade de pacificar sentimentos negativos",
                "Concentração",
                "Interesse"
            ],
            correctAnswer: 1
        },
        {
            question: "Pálpebras que demoram a abrir sugerem...?",
            image: "imagens/imagem26.jpg",
            options: [
                "Confiança",
                "Interesse profundo",
                "Ocultação de emoções negativas",
                "Dúvida"
            ],
            correctAnswer: 2
        },

        // Perguntas 27 a 36
        {
            question: "Pálpebras comprimidas podem ser um sinal de:",
            image: "imagens/imagem27.jpg",
            options: [
                "Curiosidade",
                "Sentimentos negativos ou perda",
                "Felicidade",
                "Alegria genuína"
            ],
            correctAnswer: 1
        },
        {
            question: "Quando os olhos se entortam junto com o franzir da testa, isso pode indicar:",
            image: "imagens/imagem28.jpg",
            options: [
                "Confiança",
                "Desconforto ou frustração",
                "Prazer",
                "Tristeza"
            ],
            correctAnswer: 1
        },
        {
            question: "O arquear das sobrancelhas é um sinal de:",
            image: "imagens/imagem29.jpg",
            options: [
                "Surpresa positiva ou reconhecimento",
                "Confusão",
                "Medo",
                "Indiferença"
            ],
            correctAnswer: 0
        },
        {
            question: "O gesto de franzir o nariz é um indicativo de:",
            image: "imagens/imagem30.jpg",
            options: [
                "Desprazer ou repulsa",
                "Felicidade",
                "Desinteresse",
                "Foco"
            ],
            correctAnswer: 0
        },
        {
            question: "O sorriso verdadeiro é caracterizado por:",
            image: "imagens/imagem31.jpg",
            options: [
                "Apenas os lábios sorrindo, sem envolvimento dos olhos",
                "Aumento da dilatação das pupilas e envolvimento dos músculos ao redor dos olhos",
                "Lábios pressionados e ausência de expressão nos olhos",
                "Sorriso forçado e sem emoção nos olhos"
            ],
            correctAnswer: 1
        },
        {
            question: "O que pode indicar lábios pressionados em uma pessoa?",
            image: "imagens/imagem32.jpg",
            options: [
                "Relaxamento",
                "Satisfação",
                "Estresse ou desconforto",
                "Confiança"
            ],
            correctAnswer: 2
        },
        {
            question: "Lábios em vias de desaparecer são geralmente associados a:",
            image: "imagens/imagem33.jpg",
            options: [
                "Satisfação ou felicidade",
                "Estresse ou ansiedade",
                "Confiança",
                "Empolgação"
            ],
            correctAnswer: 1
        },
        {
            question: "Quando alguém empurra os cantos da boca para baixo como um U invertido, o que isso geralmente representa?",
            image: "imagens/imagem34.jpg",
            options: [
                "Felicidade extrema",
                "Desprezo",
                "Tristeza ou angústia",
                "Confusão"
            ],
            correctAnswer: 2
        },
        {
            question: "O olhar escarninho (olhos revirados) costuma ser um sinal de:",
            image: "imagens/imagem35.jpg",
            options: [
                "Desprezo ou desrespeito",
                "Confiança",
                "Alegria genuína",
                "Surpresa"
            ],
            correctAnswer: 0
        },
        {
            question: "Compor a roupa, como ajustar a gravata ou o colarinho, pode indicar:",
            image: "imagens/imagem36.jpg",
            options: [
                "Estabilidade emocional",
                "Insegurança ou desejo de autopacificação",
                "Felicidade",
                "Foco"
            ],
            correctAnswer: 1
        }
    ]
};
// Adicionando as questões 37, 38, 39 e 40 ao quiz
quizData.questions.push(
    {
        question: "Qual é a abordagem mais adequada para os homens ao cumprimentar outros homens?",
        image: "imagens/imagem37.jpg",
        options: [
            "Abordar diretamente de frente",
            "Abordar em ângulos, movendo-se ligeiramente para o lado"
        ],
        correctAnswer: 1
    },
    {
        question: "O que acontece quando dois indivíduos estão falando frente a frente e seus pés estão apontados um para o outro?",
        image: "imagens/imagem38.jpg",
        options: [
            "Eles provavelmente não querem ser interrompidos",
            "Eles estão prontos para incluir outra pessoa na conversa"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual comportamento descreve um 'aperto de mão à político'?",
        image: "imagens/imagem39.jpg",
        options: [
            "A pessoa aperta a mão de forma firme e discreta",
            "A pessoa agarra a mão do outro com ambas as suas mãos"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a maneira adequada de reforçar um aperto de mão?",
        image: "imagens/imagem40.jpg",
        options: [
            "Tocar no braço ou no ombro da pessoa com a outra mão",
            "Cobrir a mão da pessoa com a sua"
        ],
        correctAnswer: 0
    }
);
// Adicionando as questões 41, 42, 43 e 44 ao quiz
quizData.questions.push(
    {
        question: "Quando uma pessoa de elevado estatuto, como um professor universitário ou advogado, aperta a mão de alguém e mantém a outra mão no bolso do casaco com o polegar para fora, ela está transmitindo qual mensagem?",
        image: "imagens/imagem41.jpg",
        options: [
            "Somos iguais, não há diferenças entre nós.",
            "Estou desconfortável com o contato físico.",
            "Não somos iguais; sou superior a você.",
            "Estou disponível para interações sociais mais próximas."
        ],
        correctAnswer: 2
    },
    {
        question: "Uma inclinação para a frente entre duas pessoas significa o quê?",
        image: "imagens/imagem42.jpg",
        options: [
            "Confirmação de um desacordo.",
            "Desconforto e desejo de sair.",
            "Conforto e sincronia.",
            "Distância emocional."
        ],
        correctAnswer: 2
    },
    {
        question: "Quando nos inclinamos para trás em relação a pessoas ou situações, isso indica:",
        image: "imagens/imagem43.jpg",
        options: [
            "Confiança e interesse.",
            "Desprezo e desejo de afastamento.",
            "Empatia e sintonia.",
            "Apreço e aceitação."
        ],
        correctAnswer: 1
    },
    {
        question: "O que a expiração com as bochechas cheias normalmente indica?",
        image: "imagens/imagem44.jpg",
        options: [
            "Fadiga extrema.",
            "Alívio ou pacificação após um evento estressante.",
            "Raiva ou frustração.",
            "Ansiedade crescente."
        ],
        correctAnswer: 1
    }
);
// Adicionando as questões 45, 46, 47 e 48 ao quiz
quizData.questions.push(
    {
        question: "O que a postura de um homem projetando o peito para a frente, elevando o queixo e exibindo um sorriso indica, mesmo que não seja genuíno?",
        image: "imagens/imagem45.jpg",
        options: [
            "Ele está demonstrando raiva e frustração.",
            "Ele está em uma posição de inferioridade.",
            "Ele está demonstrando autoconfiança e tentando criar uma boa impressão.",
            "Ele está desconfortável e tentando disfarçar."
        ],
        correctAnswer: 2
    },
    {
        question: "O que a postura de um homem projetando o peito para dentro indica?",
        image: "imagens/imagem46.jpg",
        options: [
            "Ele está calmo e relaxado.",
            "Ele está demonstrando entusiasmo e energia.",
            "Ele está se preparando para uma atividade física.",
            "Ele está sentindo insegurança ou desconforto."
        ],
        correctAnswer: 3
    },
    {
        question: "Os gestos ilustradores são usados principalmente para:",
        image: "imagens/imagem47.jpg",
        options: [
            "Exibir raiva e agressividade.",
            "Complementar a mensagem verbal.",
            "Demonstrar desinteresse ou indiferença.",
            "Ajudar a aliviar o estresse."
        ],
        correctAnswer: 1
    },
    {
        question: "O que os gestos manipuladores, adaptadores e pacificadores geralmente indicam?",
        image: "imagens/imagem48.jpg",
        options: [
            "Estado emocional calmo.",
            "Comportamento altamente extrovertido.",
            "Sentimento de autossuficiência.",
            "Estado emocional mais ansioso ou de desconforto."
        ],
        correctAnswer: 3
    }
);
// Adicionando as questões 49, 50 e 51 ao quiz
quizData.questions.push(
    {
        question: "Quando pode ocorrer a manipulação de vestimenta?",
        image: "imagens/imagem49.jpg",
        options: [
            "Quando estamos nervosos e tentando nos autopacificar.",
            "Quando estamos confiantes e calmos.",
            "Quando queremos impressionar os outros.",
            "Quando estamos relaxados em um ambiente confortável."
        ],
        correctAnswer: 0  // Resposta correta está na primeira opção
    },
    {
        question: "O que direcionar o corpo para algo demonstra?",
        image: "imagens/imagem50.jpg",
        options: [
            "Interesse da pessoa em determinada coisa.",
            "Tentativa de evitar a interação.",
            "Desconforto com a situação atual.",
            "Falta de interesse na interação."
        ],
        correctAnswer: 0  // Resposta correta está na primeira opção
    },
    {
        question: "O que o espelhamento na linguagem não verbal indica?",
        image: "imagens/imagem51.jpg",
        options: [
            "Tentativa de manipular a conversa.",
            "Desconforto emocional.",
            "Grande conexão empática entre as pessoas.",
            "Falta de interesse na interação."
        ],
        correctAnswer: 2  // Resposta correta está na terceira opção
    }
);



// Funções do Quiz
let currentQuestionIndex = 0;

function loadQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-image').src = question.image;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.classList.remove('correct', 'incorrect'); // Remove classes de feedback
        option.disabled = false; // Reabilita os botões
    });

    document.getElementById('result-container').style.display = 'none';

    // Parar o áudio anterior, se estiver tocando
    if (currentQuestionAudio) {
        currentQuestionAudio.pause();
        currentQuestionAudio.currentTime = 0; // Reinicia o áudio
    }

    // Reproduzir o áudio da pergunta atual, se disponível
    if (question.audio) {
        currentQuestionAudio = new Audio(question.audio); // Cria o objeto de áudio para a pergunta
        currentQuestionAudio.play(); // Reproduz o áudio
    }
}

function checkAnswer(selectedIndex) {
    const question = quizData.questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const resultText = document.getElementById('result-text');

    // Desabilita todos os botões para evitar múltiplos cliques
    options.forEach(option => option.disabled = true);

    // Verifica se a resposta selecionada está correta
    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct'); // Adiciona a classe 'correct' ao botão selecionado
        resultText.textContent = "Resposta correta!";
        playFeedbackSound(true); // Toca o som de resposta certa
    } else {
        options[selectedIndex].classList.add('incorrect'); // Adiciona a classe 'incorrect' ao botão selecionado
        resultText.textContent = "Resposta errada!";
        playFeedbackSound(false); // Toca o som de resposta errada
    }

    // Exibe o feedback e o botão "Próxima Pergunta"
    document.getElementById('result-container').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.questions.length) {
        loadQuestion(); // Carrega a próxima pergunta
    } else {
        // Parar o áudio ao finalizar o quiz
        if (currentQuestionAudio) {
            currentQuestionAudio.pause();
            currentQuestionAudio.currentTime = 0;
        }
        alert("Você completou o quiz!");
    }
}

function startQuiz() {
    document.querySelector('.screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

// Música de fundo
const music = document.getElementById('background-music');
const musicButton = document.getElementById('music-button');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = '🔊';
    } else {
        music.pause();
        musicButton.textContent = '🔇';
    }
}

musicButton.addEventListener('click', toggleMusic);

// Configurações de volume
const musicVolume = document.getElementById('music-volume');
const effectsVolume = document.getElementById('effects-volume');

// Ajustar volume da música de fundo
musicVolume.addEventListener('input', () => {
    music.volume = musicVolume.value;
});

// Ajustar volume dos efeitos sonoros
effectsVolume.addEventListener('input', () => {
    correctSound.volume = effectsVolume.value;
    wrongSound.volume = effectsVolume.value;
});

// Inicializa os volumes
music.volume = musicVolume.value;
correctSound.volume = effectsVolume.value;
wrongSound.volume = effectsVolume.value;
// Função para exibir as frases de mentalismo
function showPhrases() {
    const phrases = document.querySelectorAll('.phrases');
    let index = 0;

    // Exibe a primeira frase
    phrases[index].style.display = 'block';

    // Intervalo para trocar as frases
    setInterval(() => {
        // Esconde a frase atual
        phrases[index].style.display = 'none';

        // Avança para a próxima frase
        index = (index + 1) % phrases.length;

        // Exibe a próxima frase
        phrases[index].style.display = 'block';
    }, 5000); // Troca a cada 5 segundos
}

// Inicia a exibição das frases quando a página carrega
window.onload = () => {
    showPhrases();
};
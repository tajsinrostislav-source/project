/* ============================================================
   ОБЩИЕ ФУНКЦИИ
   ============================================================ */
let score = 0;
let level = 1;

function updateScore(points) {
  score += points;
  document.getElementById('score').textContent = score;
  level = Math.floor(score / 100) + 1;
  document.getElementById('level').textContent = level;
}

function showTab(id, btn) {
  document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ============================================================
   ВИКТОРИНА — БАЗА ВОПРОСОВ ПО КЛАССАМ (4–11)
   ============================================================ */
const quizData = {
  4: [
    { q: "Сколько будет 7 × 8?", a: ["54", "56", "48", "64"], correct: 1 },
    { q: "Какое животное называют «царём зверей»?", a: ["Тигр", "Слон", "Лев", "Медведь"], correct: 2 },
    { q: "Сколько цветов в радуге?", a: ["5", "6", "7", "8"], correct: 2 },
    { q: "Кто написал сказку «Колобок»?", a: ["Пушкин", "Народ", "Толстой", "Андерсен"], correct: 1 },
    { q: "Какое время года идёт после зимы?", a: ["Лето", "Осень", "Весна", "Зима"], correct: 2 },
    { q: "Сколько ног у паука?", a: ["6", "8", "10", "4"], correct: 1 },
    { q: "Как называется наша планета?", a: ["Марс", "Луна", "Земля", "Солнце"], correct: 2 },
    { q: "Какой цвет получится при смешении синего и жёлтого?", a: ["Красный", "Зелёный", "Фиолетовый", "Оранжевый"], correct: 1 },
    { q: "Сколько дней в неделе?", a: ["5", "6", "7", "8"], correct: 2 },
    { q: "Что выделяет растение при фотосинтезе?", a: ["Азот", "Кислород", "Водород", "Гелий"], correct: 1 }
  ],
  5: [
    { q: "Столица России?", a: ["Санкт-Петербург", "Москва", "Казань", "Новосибирск"], correct: 1 },
    { q: "Сколько будет 144 ÷ 12?", a: ["10", "11", "12", "14"], correct: 2 },
    { q: "Самая большая планета Солнечной системы?", a: ["Земля", "Сатурн", "Юпитер", "Нептун"], correct: 2 },
    { q: "Кто написал «Сказку о рыбаке и рыбке»?", a: ["Пушкин", "Крылов", "Ершов", "Некрасов"], correct: 0 },
    { q: "Какой газ нужен человеку для дыхания?", a: ["Азот", "Кислород", "Углекислый газ", "Водород"], correct: 1 },
    { q: "Что такое материк?", a: ["Остров", "Большой участок суши", "Океан", "Гора"], correct: 1 },
    { q: "Сколько сторон у прямоугольника?", a: ["2", "3", "4", "6"], correct: 2 },
    { q: "Какое животное самое высокое?", a: ["Слон", "Жираф", "Кит", "Верблюд"], correct: 1 },
    { q: "Как называется прибор для измерения температуры?", a: ["Барометр", "Термометр", "Линейка", "Весы"], correct: 1 },
    { q: "Сколько месяцев в году?", a: ["10", "11", "12", "13"], correct: 2 }
  ],
  6: [
    { q: "Что изучает география?", a: ["Животных", "Землю", "Числа", "Звёзды"], correct: 1 },
    { q: "Какое вещество имеет формулу H₂O?", a: ["Соль", "Сахар", "Вода", "Кислород"], correct: 2 },
    { q: "Кто написал «Дубровский»?", a: ["Толстой", "Пушкин", "Гоголь", "Лермонтов"], correct: 1 },
    { q: "Сколько градусов в прямом угле?", a: ["45", "90", "180", "360"], correct: 1 },
    { q: "Самая длинная река в России?", a: ["Волга", "Обь", "Лена", "Амур"], correct: 2 },
    { q: "Какое животное относится к млекопитающим?", a: ["Крокодил", "Дельфин", "Акула", "Пингвин"], correct: 1 },
    { q: "Что такое НОК?", a: ["Наименьшее общее кратное", "Наибольший общий корень", "Новая общая клетка", "Наука о числах"], correct: 0 },
    { q: "Сколько континентов на Земле?", a: ["5", "6", "7", "8"], correct: 2 },
    { q: "Какая страна — родина Олимпийских игр?", a: ["Египет", "Греция", "Италия", "Китай"], correct: 1 },
    { q: "Что такое пиксель?", a: ["Точка изображения", "Звук", "Буква", "Число"], correct: 0 }
  ],
  7: [
    { q: "Какой газ преобладает в атмосфере Земли?", a: ["Кислород", "Азот", "Углекислый газ", "Водород"], correct: 1 },
    { q: "Что изучает физика?", a: ["Живую природу", "Явления природы", "Числа", "Языки"], correct: 1 },
    { q: "Кто написал «Тарас Бульба»?", a: ["Пушкин", "Гоголь", "Толстой", "Достоевский"], correct: 1 },
    { q: "Как называется единица измерения силы?", a: ["Джоуль", "Ньютон", "Ватт", "Паскаль"], correct: 1 },
    { q: "Что такое фотосинтез?", a: ["Дыхание", "Образование органики на свету", "Рост", "Питание"], correct: 1 },
    { q: "Сколько будет 2³?", a: ["4", "6", "8", "9"], correct: 2 },
    { q: "Какая самая высокая гора в мире?", a: ["Эльбрус", "Эверест", "Килиманджаро", "Монблан"], correct: 1 },
    { q: "Что такое алгоритм?", a: ["Последовательность действий", "Число", "Рисунок", "Формула"], correct: 0 },
    { q: "Какое животное — символ Австралии?", a: ["Панда", "Кенгуру", "Тигр", "Слон"], correct: 1 },
    { q: "Что означает приставка «кило»?", a: ["10", "100", "1000", "10000"], correct: 2 }
  ],
  8: [
    { q: "Сколько планет в Солнечной системе?", a: ["7", "8", "9", "10"], correct: 1 },
    { q: "Что такое химический элемент?", a: ["Смесь", "Вид атомов", "Молекула", "Вещество"], correct: 1 },
    { q: "Кто написал «Ревизор»?", a: ["Гоголь", "Пушкин", "Чехов", "Тургенев"], correct: 0 },
    { q: "Что такое теорема Пифагора?", a: ["a+b=c", "a²+b²=c²", "a×b=c", "a−b=c"], correct: 1 },
    { q: "Какой орган перекачивает кровь?", a: ["Печень", "Лёгкие", "Сердце", "Почки"], correct: 2 },
    { q: "Что такое электрический ток?", a: ["Движение зарядов", "Свет", "Тепло", "Звук"], correct: 0 },
    { q: "Когда началась Вторая мировая война?", a: ["1914", "1939", "1941", "1945"], correct: 1 },
    { q: "Какое вещество — самый твёрдый природный минерал?", a: ["Золото", "Алмаз", "Железо", "Кварц"], correct: 1 },
    { q: "Что такое HTTP?", a: ["Протокол передачи данных", "Язык программирования", "Файл", "Браузер"], correct: 0 },
    { q: "Какой металл жидкий при комнатной температуре?", a: ["Золото", "Ртуть", "Железо", "Медь"], correct: 1 }
  ],
  9: [
    { q: "Что такое квадратный корень из 169?", a: ["11", "12", "13", "14"], correct: 2 },
    { q: "Какой закон Ньютона гласит: «Действие = противодействие»?", a: ["Первый", "Второй", "Третий", "Четвёртый"], correct: 2 },
    { q: "Кто написал «Евгения Онегина»?", a: ["Лермонтов", "Пушкин", "Гоголь", "Толстой"], correct: 1 },
    { q: "Что такое ВВП?", a: ["Валовый внутренний продукт", "Всемирный банк", "Внешний вид", "Внутренний валюта"], correct: 0 },
    { q: "Какая планета ближе всего к Солнцу?", a: ["Венера", "Меркурий", "Земля", "Марс"], correct: 1 },
    { q: "Что изучает генетика?", a: ["Наследственность", "Звёзды", "Числа", "Языки"], correct: 0 },
    { q: "Какой газ вызывает парниковый эффект?", a: ["Кислород", "Азот", "Углекислый газ", "Гелий"], correct: 2 },
    { q: "Что такое HTML?", a: ["Язык разметки", "Язык программирования", "База данных", "Операционная система"], correct: 0 },
    { q: "Кто открыл закон всемирного тяготения?", a: ["Эйнштейн", "Ньютон", "Галилей", "Коперник"], correct: 1 },
    { q: "Что такое функция в математике?", a: ["Зависимость", "Число", "Уравнение", "Фигура"], correct: 0 }
  ],
  10: [
    { q: "Что такое производная функции?", a: ["Скорость изменения", "Площадь", "Корень", "Степень"], correct: 0 },
    { q: "Кто написал «Войну и мир»?", a: ["Пушкин", "Достоевский", "Толстой", "Чехов"], correct: 2 },
    { q: "Что такое ДНК?", a: ["Молекула наследственности", "Белок", "Витамин", "Гормон"], correct: 0 },
    { q: "Какая формула второго закона Ньютона?", a: ["F=ma", "E=mc²", "P=mg", "A=Fs"], correct: 0 },
    { q: "Что такое инфляция?", a: ["Рост цен", "Падение цен", "Рост зарплат", "Кредит"], correct: 0 },
    { q: "Кто автор теории относительности?", a: ["Ньютон", "Эйнштейн", "Бор", "Планк"], correct: 1 },
    { q: "Что изучает органическая химия?", a: ["Соединения углерода", "Металлы", "Газы", "Воду"], correct: 0 },
    { q: "Что такое логарифм?", a: ["Показатель степени", "Корень", "Дробь", "Модуль"], correct: 0 },
    { q: "Кто написал «Преступление и наказание»?", a: ["Толстой", "Достоевский", "Тургенев", "Гончаров"], correct: 1 },
    { q: "Что такое Всемирная паутина?", a: ["Интернет", "Библиотека", "Сеть сайтов", "Протокол"], correct: 2 }
  ],
  11: [
    { q: "Что такое интеграл?", a: ["Площадь под графиком", "Скорость", "Корень", "Степень"], correct: 0 },
    { q: "Какой закон термодинамики о невозможности вечного двигателя?", a: ["Первый", "Второй", "Третий", "Нулевой"], correct: 1 },
    { q: "Кто написал «Мастера и Маргариту»?", a: ["Булгаков", "Пастернак", "Солженицын", "Набоков"], correct: 0 },
    { q: "Что такое ВНП?", a: ["Валовый национальный продукт", "Внешний налог", "Внутренний продукт", "Всеобщий налог"], correct: 0 },
    { q: "Что такое квантовая механика?", a: ["Физика микромира", "Наука о звёздах", "Химия", "Биология"], correct: 0 },
    { q: "Что такое ООП?", a: ["Объектно-ориентированное программирование", "Общий операционный процесс", "Организация программ", "Операционная система"], correct: 0 },
    { q: "Какой элемент имеет символ Fe?", a: ["Фтор", "Железо", "Фосфор", "Франций"], correct: 1 },
    { q: "Что такое гипотеза?", a: ["Предположение", "Факт", "Закон", "Теория"], correct: 0 },
    { q: "Что такое экспонента?", a: ["Функция e^x", "Корень", "Логарифм", "Дробь"], correct: 0 },
    { q: "Кто сформулировал теорию эволюции?", a: ["Дарвин", "Ламарк", "Мендель", "Пастер"], correct: 0 }
  ]
};

let selectedGrade = null;
let quizCurrent = 0;
let quizScore = 0;
let quizActive = false;
let currentQuizQuestions = [];

function initGrades() {
  const grid = document.getElementById('gradesGrid');
  grid.innerHTML = '';
  for (let grade = 4; grade <= 11; grade++) {
    const btn = document.createElement('button');
    btn.className = 'grade-btn';
    btn.innerHTML = `${grade}<span class="grade-sub">класс</span>`;
    btn.onclick = () => selectGrade(grade, btn);
    grid.appendChild(btn);
  }
}

function selectGrade(grade, btn) {
  selectedGrade = grade;
  document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('currentGrade').textContent = grade;
  
  document.getElementById('gradeSelection').classList.add('hidden');
  document.getElementById('quizArea').classList.remove('hidden');
  document.getElementById('quizQuestion').textContent = `Класс ${grade}. Нажми «Начать викторину»!`;
  document.getElementById('quizAnswers').innerHTML = '';
  document.getElementById('quizMessage').innerHTML = '';
  document.getElementById('quizStartBtn').style.display = 'inline-block';
  document.getElementById('quizProgress').style.width = '0%';
}

function backToGrades() {
  quizActive = false;
  document.getElementById('gradeSelection').classList.remove('hidden');
  document.getElementById('quizArea').classList.add('hidden');
  document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
}

function startQuiz() {
  if (!selectedGrade) return;
  
  currentQuizQuestions = [...quizData[selectedGrade]].sort(() => Math.random() - 0.5);
  quizCurrent = 0;
  quizScore = 0;
  quizActive = true;
  document.getElementById('quizStartBtn').style.display = 'none';
  document.getElementById('quizMessage').innerHTML = '';
  showQuizQuestion();
}

function showQuizQuestion() {
  if (quizCurrent >= currentQuizQuestions.length) {
    endQuiz();
    return;
  }
  
  const q = currentQuizQuestions[quizCurrent];
  document.getElementById('quizQuestion').textContent = `${quizCurrent + 1}. ${q.q}`;
  document.getElementById('quizProgress').style.width = ((quizCurrent) / currentQuizQuestions.length * 100) + '%';
  
  const answersDiv = document.getElementById('quizAnswers');
  answersDiv.innerHTML = '';
  
  q.a.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index, btn);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index, btn) {
  if (!quizActive) return;
  
  const q = currentQuizQuestions[quizCurrent];
  const buttons = document.querySelectorAll('#quizAnswers .answer-btn');
  buttons.forEach(b => b.disabled = true);
  
  if (index === q.correct) {
    btn.classList.add('correct');
    quizScore++;
    updateScore(10);
    document.getElementById('quizMessage').innerHTML = '<div class="message success">✅ Правильно! +10 очков</div>';
  } else {
    btn.classList.add('wrong');
    buttons[q.correct].classList.add('correct');
    document.getElementById('quizMessage').innerHTML = '<div class="message error">❌ Неправильно. Правильный ответ выделен.</div>';
  }
  
  quizCurrent++;
  document.getElementById('quizProgress').style.width = (quizCurrent / currentQuizQuestions.length * 100) + '%';
  
  setTimeout(() => {
    document.getElementById('quizMessage').innerHTML = '';
    showQuizQuestion();
  }, 1500);
}

function endQuiz() {
  quizActive = false;
  document.getElementById('quizQuestion').textContent = `🎉 Викторина завершена!`;
  document.getElementById('quizAnswers').innerHTML = '';
  document.getElementById('quizMessage').innerHTML = 
    `<div class="message info">Правильных ответов: ${quizScore} из ${currentQuizQuestions.length}. Отличная работа!</div>`;
  document.getElementById('quizStartBtn').style.display = 'inline-block';
  document.getElementById('quizStartBtn').textContent = 'Играть снова';
}

/* ============================================================
   МАТЕМАТИКА
   ============================================================ */
let mathTimer = null;
let mathTimeLeft = 60;
let mathSolved = 0;
let mathCurrentAnswer = 0;
let mathActive = false;

function startMath() {
  mathActive = true;
  mathTimeLeft = 60;
  mathSolved = 0;
  document.getElementById('mathTime').textContent = 60;
  document.getElementById('mathSolved').textContent = 0;
  document.getElementById('mathInput').disabled = false;
  document.getElementById('mathCheckBtn').disabled = false;
  document.getElementById('mathStartBtn').disabled = true;
  document.getElementById('mathMessage').innerHTML = '';
  
  newMathProblem();
  document.getElementById('mathInput').focus();
  
  clearInterval(mathTimer);
  mathTimer = setInterval(() => {
    mathTimeLeft--;
    document.getElementById('mathTime').textContent = mathTimeLeft;
    if (mathTimeLeft <= 0) endMath();
  }, 1000);
}

function newMathProblem() {
  const ops = ['+', '-', '×'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a, b, answer;
  
  if (op === '+') {
    a = Math.floor(Math.random() * 100) + 1;
    b = Math.floor(Math.random() * 100) + 1;
    answer = a + b;
  } else if (op === '-') {
    a = Math.floor(Math.random() * 100) + 1;
    b = Math.floor(Math.random() * a) + 1;
    answer = a - b;
  } else {
    a = Math.floor(Math.random() * 12) + 2;
    b = Math.floor(Math.random() * 12) + 2;
    answer = a * b;
  }
  
  mathCurrentAnswer = answer;
  document.getElementById('mathProblem').textContent = `${a} ${op} ${b} = ?`;
  document.getElementById('mathInput').value = '';
}

function checkMath() {
  if (!mathActive) return;
  const input = document.getElementById('mathInput');
  const userAnswer = parseInt(input.value);
  
  if (isNaN(userAnswer)) return;
  
  if (userAnswer === mathCurrentAnswer) {
    mathSolved++;
    document.getElementById('mathSolved').textContent = mathSolved;
    updateScore(5);
    document.getElementById('mathMessage').innerHTML = '<div class="message success">✅ Верно! +5 очков</div>';
    newMathProblem();
  } else {
    document.getElementById('mathMessage').innerHTML = `<div class="message error">❌ Неверно. Правильный ответ: ${mathCurrentAnswer}</div>`;
    input.value = '';
  }
  input.focus();
  
  setTimeout(() => {
    if (mathActive) document.getElementById('mathMessage').innerHTML = '';
  }, 1200);
}

function endMath() {
  mathActive = false;
  clearInterval(mathTimer);
  document.getElementById('mathInput').disabled = true;
  document.getElementById('mathCheckBtn').disabled = true;
  document.getElementById('mathStartBtn').disabled = false;
  document.getElementById('mathMessage').innerHTML = 
    `<div class="message info">⏰ Время вышло! Решено примеров: ${mathSolved}. Молодец!</div>`;
}

document.getElementById('mathInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkMath();
});

/* ============================================================
   ИГРА «ПАМЯТЬ»
   ============================================================ */
const memorySymbols = ['🍎', '🌟', '🎈', '🚀', '🎨', '🐱'];
let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = [];
let memoryMoves = 0;
let memoryLocked = false;

function initMemory() {
  memoryCards = [...memorySymbols, ...memorySymbols];
  memoryCards.sort(() => Math.random() - 0.5);
  memoryFlipped = [];
  memoryMatched = [];
  memoryMoves = 0;
  memoryLocked = false;
  
  document.getElementById('memoryMoves').textContent = 0;
  document.getElementById('memoryPairs').textContent = 0;
  document.getElementById('memoryMessage').innerHTML = '';
  
  const grid = document.getElementById('memoryGrid');
  grid.innerHTML = '';
  
  memoryCards.forEach((symbol, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = index;
    card.dataset.symbol = symbol;
    card.textContent = symbol;
    card.onclick = () => flipCard(card);
    grid.appendChild(card);
  });
}

function flipCard(card) {
  if (memoryLocked) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
  
  card.classList.add('flipped');
  memoryFlipped.push(card);
  
  if (memoryFlipped.length === 2) {
    memoryMoves++;
    document.getElementById('memoryMoves').textContent = memoryMoves;
    memoryLocked = true;
    
    const [c1, c2] = memoryFlipped;
    if (c1.dataset.symbol === c2.dataset.symbol) {
      setTimeout(() => {
        c1.classList.add('matched');
        c2.classList.add('matched');
        memoryMatched.push(c1, c2);
        document.getElementById('memoryPairs').textContent = memoryMatched.length / 2;
        updateScore(15);
        memoryFlipped = [];
        memoryLocked = false;
        
        if (memoryMatched.length === memoryCards.length) {
          document.getElementById('memoryMessage').innerHTML = 
            `<div class="message success">🎉 Победа! Все пары найдены за ${memoryMoves} ходов! +90 очков</div>`;
          updateScore(90);
        }
      }, 500);
    } else {
      setTimeout(() => {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
        memoryFlipped = [];
        memoryLocked = false;
      }, 1000);
    }
  }
}

/* ============================================================
   ИГРА «УГАДАЙ СЛОВО»
   ============================================================ */
const wordList = ['ШКОЛА', 'НАУКА', 'КНИГА', 'УЧИТЕЛЬ', 'УРОК', 'ЗНАНИЯ', 'МАТЕМАТИКА', 'ФИЗИКА', 'ХИМИЯ', 'ИСТОРИЯ', 'ГЕОГРАФИЯ', 'БИОЛОГИЯ', 'ЛИТЕРАТУРА', 'АЛГЕБРА', 'ГЕОМЕТРИЯ', 'ИНФОРМАТИКА'];
let currentWord = '';
let guessedLetters = [];
let wrongLetters = [];
let wordActive = false;

function initWord() {
  currentWord = wordList[Math.floor(Math.random() * wordList.length)];
  guessedLetters = [];
  wrongLetters = [];
  wordActive = true;
  
  document.getElementById('wordWrong').textContent = 0;
  document.getElementById('wordMessage').innerHTML = '';
  
  updateWordDisplay();
  
  const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const container = document.getElementById('lettersContainer');
  container.innerHTML = '';
  
  alphabet.split('').forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter;
    btn.onclick = () => guessLetter(letter, btn);
    container.appendChild(btn);
  });
}

function updateWordDisplay() {
  const display = currentWord.split('').map(l => 
    guessedLetters.includes(l) ? l : '_'
  ).join(' ');
  document.getElementById('wordDisplay').textContent = display;
}

function guessLetter(letter, btn) {
  if (!wordActive) return;
  btn.disabled = true;
  
  if (currentWord.includes(letter)) {
    guessedLetters.push(letter);
    btn.classList.add('correct');
    updateWordDisplay();
    updateScore(3);
    
    if (currentWord.split('').every(l => guessedLetters.includes(l))) {
      wordActive = false;
      updateScore(30);
      document.getElementById('wordMessage').innerHTML = 
        `<div class="message success">🎉 Слово угадано: ${currentWord}! +30 очков</div>`;
    }
  } else {
    wrongLetters.push(letter);
    btn.classList.add('wrong');
    document.getElementById('wordWrong').textContent = wrongLetters.length;
    
    if (wrongLetters.length >= 6) {
      wordActive = false;
      document.getElementById('wordMessage').innerHTML = 
        `<div class="message error">💀 Игра окончена! Слово было: ${currentWord}</div>`;
    }
  }
}

/* ============================================================
   ФАКТЫ
   ============================================================ */
const facts = [
  "🐙 У осьминога три сердца и голубая кровь.",
  "🍯 Мёд не портится — археологи находили съедобный мёд возрастом 3000 лет.",
  "⚡ Молния в 5 раз горячее поверхности Солнца.",
  "🌍 Земля — единственная планета, названная не в честь божества.",
  "🐘 Слоны — единственные животные, которые не могут прыгать.",
  "🧠 Мозг использует около 20% всей энергии тела.",
  "🦈 Акулы существуют дольше, чем деревья.",
  "💧 Человеческое тело на 60% состоит из воды.",
  "🌙 На Луне нет атмосферы, поэтому там не слышно звуков.",
  "🐝 Пчёлы могут узнавать человеческие лица.",
  "📚 Первая книга, напечатанная на станке, — Библия Гутенберга (1455 год).",
  "🎵 Музыка улучшает память и способность к обучению.",
  "🌡️ Самая высокая температура на Земле — 56,7°C (Долина Смерти, США).",
  "🦋 Бабочки пробуют пищу лапками.",
  "🔬 В одной капле воды может быть до 100 миллионов бактерий.",
  "🌌 Свет от Солнца до Земли идёт около 8 минут.",
  "🐋 Синий кит — самое большое животное на планете.",
  "🧊 Лёд занимает больше объёма, чем вода, из которой он получился.",
  "🎨 Радуга всегда появляется на противоположной стороне от Солнца.",
  "🕰️ Сутки на Венере длиннее, чем год на Венере."
];

function showRandomFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('factDisplay').textContent = fact;
  updateScore(2);
}

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initGrades();
  initMemory();
  initWord();
});

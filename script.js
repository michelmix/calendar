// const { event } = require("cypress/types/jquery");

const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};
createDaysOfTheWeek();

const daysList = document.getElementById("days");
const tagUlDays = document.getElementsByTagName("ul")[2];
// console.log(tagUlDays);

const createDaysOfTheMonth = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let index = 0; index < decemberDaysList.length; index++) {
    const day = decemberDaysList[index];
    const dayListIten = document.createElement("li");
    dayListIten.innerHTML = day;
    dayListIten.className = "day";
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListIten.classList.add("friday");
    }
    if (day === 24 || day === 25 || day === 31) {
      dayListIten.classList.add("holiday");
    }

    daysList.appendChild(dayListIten);
  }
};
createDaysOfTheMonth();

const holidayBtn = document.getElementById("btn-holiday");
const handleHolidays = () => {
  const holidays = document.getElementsByClassName("holiday");
  // console.log(holidays);
  for (let index = 0; index < holidays.length; index++) {
    const element = holidays[index];
    if (element.style.backgroundColor === "red") {
      element.style.backgroundColor = "rgb(238,238,238)";
    } else {
      element.style.backgroundColor = "red";
    }
  }
};
holidayBtn.addEventListener("click", handleHolidays);

const fridayBtn = document.getElementById("btn-friday");
const fridays = document.getElementsByClassName("friday");
const originalTexts = [];

for (let i = 0; i < fridays.length; i++) {
  originalTexts.push(fridays[i].innerText);
}

const handleFridays = () => {
  for (let i = 0; i < fridays.length; i++) {
    if (fridays[i].innerText === "SEXTOU!") {
      fridays[i].innerText = originalTexts[i];
    } else {
      fridays[i].innerText = "SEXTOU!";
    }
  }
};
fridayBtn.addEventListener("click", handleFridays);

const days = document.getElementsByClassName("day");

const handleMouseOver = (event) => {
  event.target.style.fontSize = "30px";
};

const handleMouseOut = (event) => {
  event.target.style.fontSize = "20px";
};

for (let index = 0; index < days.length; index++) {
  const day = days[index];
  day.addEventListener("mouseover", handleMouseOver);
  day.addEventListener("mouseout", handleMouseOut);
}

// Função para lidar com a seleção e desmarcação da tarefa
const handleTaskSelection = (event) => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected'); // Remove a classe 'selected' de qualquer tarefa selecionada anteriormente
  }
  event.target.classList.add('selected'); // Adiciona a classe 'selected' à tarefa clicada
};

// Adiciona evento de clique a todas as tarefas para lidar com a seleção
const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
  task.addEventListener('click', handleTaskSelection);
});

// Função para lidar com a atribuição de cor ao dia do calendário
const handleDayColoring = (event) => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    const color = selectedTask.style.backgroundColor; // Obtém a cor da tarefa selecionada
    event.target.style.color = color; // Atribui a cor ao texto do dia do calendário
  } else {
    event.target.style.color = 'rgb(119, 119, 119)'; // Retorna à cor inicial caso não haja tarefa selecionada
  }
};

// Adiciona evento de clique a todos os dias do calendário para lidar com a atribuição de cor
const daysQuery = document.querySelectorAll('.day');
daysQuery.forEach(day => {
  day.addEventListener('click', handleDayColoring);
});

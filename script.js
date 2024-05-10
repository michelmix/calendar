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

// Escreva seu código abaixo.

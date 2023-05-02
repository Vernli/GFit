export default class Calendar {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  date = new Date();
  todayDate = new Date();

  constructor(destination) {
    this.instance = destination;
    this.dateInput = this.instance.querySelector("input[type='date']");

    this.instance
      .querySelector(".days")
      .addEventListener("click", this.changeActiveDate.bind(this));
    this.instance
      .querySelector(".prev-month")
      .addEventListener("click", this.setPreviousMonth.bind(this));

    this.instance
      .querySelector(".next-month")
      .addEventListener("click", this.setNextMonth.bind(this));
    this.instance
      .querySelector(".days")
      .addEventListener("click", this.updateDateInput.bind(this));
  }

  static setTodayDate() {
    const todayDate = new Date();
    const dateInput = document.querySelectorAll("input[type='date']");
    dateInput.forEach((input) => {
      input.value = `${todayDate.getFullYear()}-${
        todayDate.getMonth() <= 9
          ? "0" + (todayDate.getMonth() + 1)
          : todayDate.getMonth() + 1
      }-${
        todayDate.getDate() <= 9
          ? "0" + todayDate.getDate()
          : todayDate.getDate()
      }`;
    });
  }
  isDate(element) {
    return (
      element.contains("current-date") ||
      element.contains("prev-date") ||
      element.contains("next-date")
    );
  }
  isValidDate(date) {
    let today = this.todayDate.toISOString().split("T")[0];
    if (date < today) {
      this.showDateAlert();
    }
  }
  setPreviousMonth() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.renderCalendar();
  }
  setNextMonth() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.renderCalendar();
  }
  showDateAlert() {
    const alert = this.instance.querySelector(".alert");
    alert.classList.remove("hidden");

    setTimeout(() => alert.classList.add("hidden"), 3000);
  }
  changeActiveDate(e) {
    const targetClassList = e.target.classList;
    console.log(e.target);

    if (this.isDate(targetClassList)) {
      const activeElement = this.instance.querySelector(".active-date");
      if (activeElement === null) {
        targetClassList.add("active-date");
      } else {
        activeElement.classList.remove("active-date");
        targetClassList.add("active-date");
      }
    }
  }
  updateDateInput(e) {
    let month = this.instance.querySelector(".date h1").innerText.toLowerCase();
    const targetClassList = e.target.classList;
    // Check is date exist
    if (this.isDate(targetClassList)) {
      if (targetClassList.contains("prev-date")) {
        month = this.months
          .indexOf(month.charAt(0).toUpperCase() + month.slice(1))
          .toString();
        this.dateInput.value = `${this.date.getFullYear()}-${
          month.length <= 1 ? "0" + month : month
        }-${e.target.innerText}`;
      } else if (targetClassList.contains("next-date")) {
        month = (
          this.months.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) +
          2
        ).toString();
        this.dateInput.value = `${this.date.getFullYear()}-${
          month.length <= 1 ? "0" + month : month
        }-${"0" + e.target.innerText}`;
      } else {
        month = (
          this.months.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) +
          1
        ).toString();
        this.dateInput.value = `${this.date.getFullYear()}-${
          month.length <= 1 ? "0" + month : month
        }-${
          e.target.innerText.length <= 1
            ? "0" + e.target.innerText
            : e.target.innerText
        }`;
      }
      this.isValidDate(this.dateInput.value);
    }
  }
  renderCalendar() {
    this.date.setDate(1);

    const monthDays = this.instance.querySelector(".days");

    const lastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = this.date.getDay();

    const lastDayIndex = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    this.instance.querySelector(".date h1").innerHTML =
      this.months[this.date.getMonth()];

    this.instance.querySelector(".date p").innerHTML =
      new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      days += `<div class="current-date">${i}</div>`;
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
  }
}

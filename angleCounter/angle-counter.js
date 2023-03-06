const hourInput = document.querySelector(".hours-input");
const minuteInput = document.querySelector(".minutes-input");
const angleInput = document.querySelector(".angle-input");
const countButton = document.querySelector(".count-button");
const clearButton = document.querySelector(".clear-button");
const errorMessage = document.querySelector(".error-message");

function calculateClockAngle(hour, minute) {
    const hourAngle = (hour * 30) + (minute * 0.5);
    const minuteAngle = minute * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    
    return Math.min(angle, 360 - angle);
  }

function validateTimeForm(hour, minute) {
    if (hour.length === 0 || minute.length === 0) {
      return "Please enter both hours and minutes";
    } else if (isNaN(hour) || isNaN(minute)) {
      return "Please enter valid numbers for hours and minutes";
    } else if (hour < 0 || hour > 12 || minute < 0 || minute > 59) {
      return "Please enter valid values for hours (0-12) and minutes (0-59)";
    } else {
      return "";
    }
  }

  function handleInput() {
    const hour = hourInput.value.trim();
    const minute = minuteInput.value.trim();
    const validationMessage = validateTimeForm(hour, minute);
    if (validationMessage) {
        countButton.disabled = true;
        errorMessage.classList.remove("hide");
        errorMessage.textContent = validationMessage;
    } else {
        countButton.disabled = false;
        errorMessage.classList.add("hide");
        errorMessage.textContent = '';
    }
  }

  function handleCalculate() {
    const hour = parseInt(hourInput.value);
    const minute = parseInt(minuteInput.value);
    const angle = calculateClockAngle(hour, minute);
    angleInput.value = angle;
  }

  function clearAll() {
    angleInput.value = '';
    hourInput.value = '';
    minuteInput.value = '';
  }

hourInput.addEventListener("input", handleInput);
minuteInput.addEventListener("input", handleInput);
countButton.addEventListener("click", handleCalculate);
clearButton.addEventListener("click", clearAll);
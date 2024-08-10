window.addEventListener(
  "DOMContentLoaded",
  (move = () => {
    fillProgressBar("htmlProgress", 85);
    fillProgressBar("cssProgress", 75);
    fillProgressBar("jsProgress", 60);
    fillProgressBar("reactProgress", 50);
  })
);

function fillProgressBar(elementId, targetWidth) {
  let elem = document.getElementById(elementId);
  let width = 0;
  let main = setInterval(frame, 50);

  function frame() {
    if (width >= targetWidth) {
      clearInterval(main);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}
// circle progess bar
function setProgressBar(id, percentage) {
  const circle = document.querySelector(`#${id} .progress-circle-bar`);
  const number = document.querySelector(`#${id}-number`);
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = circumference;

  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 100);

  let currentPercentage = 0;
  const step = 1;
  const interval = setInterval(() => {
    currentPercentage += step;
    if (currentPercentage <= percentage) {
      number.textContent = `${currentPercentage}%`;
    } else {
      clearInterval(interval);
    }
  }, 30);
}
setProgressBar("creativity", 75);
setProgressBar("teamwork", 90);
setProgressBar("communication", 90);
setProgressBar("time-management", 85);

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

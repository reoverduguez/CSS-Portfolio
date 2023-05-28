const boxes = document.querySelectorAll(".content-box");

window.addEventListener("scroll", checkBoxesPosition);

function checkBoxesPosition() {
  const triggerPosition = window.innerHeight * 0.8;

  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;

    if (top < triggerPosition) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

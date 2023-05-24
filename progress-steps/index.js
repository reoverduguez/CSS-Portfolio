const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; 

nextBtn.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

previousBtn.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const activeCircles = document.querySelectorAll('.active');

    progressBar.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';
    previousBtn.disabled = currentActive === 1;
    nextBtn.disabled = currentActive === circles.length;
}
const leftPane = document.querySelector('.left');
const rightPane = document.querySelector('.right');
const container = document.querySelector('.container');

leftPane.addEventListener('mouseenter', () => container.classList.add('hover-left'));
leftPane.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

rightPane.addEventListener('mouseenter', () => container.classList.add('hover-right'));
rightPane.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
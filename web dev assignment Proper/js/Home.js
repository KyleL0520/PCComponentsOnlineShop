const carousel = document.querySelector(".carousel");

let dragstarted = false;
let prevPageX, prevScrollLeft;

const dragstart = (e) => {
    dragstarted = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!dragstarted) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    dragstarted = false;
}

carousel.addEventListener("mousedown", dragstart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
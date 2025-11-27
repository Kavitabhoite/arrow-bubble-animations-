const boxes = [
  document.querySelector(".box1"),
  document.querySelector(".box2"),
  document.querySelector(".box3"),
  document.querySelector(".box4"),
  document.querySelector(".box5")
];

const lag = [0, 0.2, 0.3, 0.4, 0.5]; 

window.addEventListener("mousemove", (e) => {
  boxes.forEach((box, i) => {
    const x = e.clientX - box.offsetWidth / 2;
    const y = e.clientY - box.offsetHeight / 2;

    setTimeout(() => {
      box.style.transform = `translate(${x}px, ${y}px)`;
    }, lag[i] * 100);
  });
});
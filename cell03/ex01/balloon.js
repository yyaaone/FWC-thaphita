const colors = ["red", "green", "blue"];
let colorIndex = 0;

const addSize = () => {
  const balloon = document.getElementById("balloon");
  let currentWidth = balloon.offsetWidth;
  let newSize = currentWidth + 10;

  if (newSize > 420) {
    balloon.style.width = "200px";
    balloon.style.height = "200px";
    colorIndex = 0;
    balloon.style.backgroundColor = colors[colorIndex];
  } else {
    balloon.style.width = newSize + "px";
    balloon.style.height = newSize + "px";
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
  }
};

const removeSize = () => {
  const balloon = document.getElementById("balloon");
  let currentWidth = balloon.offsetWidth;
  let newSize = currentWidth - 5;

  if (newSize < 200) {
    newSize = 200;
  }

  balloon.style.width = newSize + "px";
  balloon.style.height = newSize + "px";
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];
};

const balloon = document.getElementById("balloon");
if (balloon) {
  balloon.addEventListener("click", addSize);
  balloon.addEventListener("mouseleave", removeSize);
}
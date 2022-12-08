function randomize() {
  let randomResult = Math.floor(Math.random(1) * 76 + 1);
  let classBoard = document.querySelectorAll(".board");
  let selectedElements = classBoard[randomResult];
  let randomizedColor = (selectedElements.style.background = randomColor());

  if (selectedElements.classList.contains("selected")) {
    return;
  } else {
    selectedElements.classList.add("selected");
    randomizedColor;
  }
}

function onLoadActions() {
  for (let number = 1; number <= 76; number++) {
    let numberNode = document.createElement("div");
    numberNode.innerText = number;
    numberNode.classList.add("board", "first-board");
    document.getElementById("container").appendChild(numberNode);
  }
}

function randomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomizedcolor = "#" + randomColor;
  console.log(randomizedcolor);
  return randomizedcolor;
}
window.onload = onLoadActions;

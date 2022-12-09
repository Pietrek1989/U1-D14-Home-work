function randomizeAction() {
  let randomResult = randomize(76);
  let classBoard = document.querySelectorAll(".board");
  let userBoard = document.querySelectorAll(".userPanel");
  let selectedElements = classBoard[randomResult - 1];
  let SelectedElementsUser = userBoard[randomResult - 1];

  if (selectedElements.classList.contains("selected")) {
    randomize();
  } else {
    selectedElements.classList.add("selected");
    selectedElements.style.background = randomColor();
  }
  if (SelectedElementsUser.classList.contains("selected")) {
    randomize();
  } else if (SelectedElementsUser === selectedElements) {
    SelectedElementsUser.classList.add("selected");
    SelectedElementsUser.style.background = randomColor();
  } else {
    randomize();
  }
}

function randomize(max) {
  let randomResult = Math.floor(Math.random(1) * max + 1);
  return randomResult;
}

function generateMain() {
  for (let number = 1; number <= 76; number++) {
    let numberNode = document.createElement("div");
    numberNode.innerText = number;
    numberNode.classList.add("board", "first-board");
    document.getElementById("container").appendChild(numberNode);
  }
}

function generateOther() {
  let inputBoards = document.getElementById("numberOfBoards");
  let numberBoards = inputBoards.value;
  for (let number = 1; number <= numberBoards; number++) {
    let userPanel = document.createElement("div");
    userPanel.classList.add("board");
    document.getElementById("container-user").appendChild(userPanel);

    for (let number = 1; number <= 26; number++) {
      let userNumbers = document.createElement("div");
      userNumbers.innerText = randomize(76);
      userNumbers.classList.add("userPanel");
      userPanel.appendChild(userNumbers);
      console.log(userNumbers);
    }
  }
}

let generate = document.getElementById("getUserBoards");

function randomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomizedcolor = "#" + randomColor;
  return randomizedcolor;
}
window.onload = generateMain;

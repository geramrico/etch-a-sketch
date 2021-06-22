const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button")
let root = document.documentElement;

const makeGrid = (rows=4, cols=4) => {
  root.style.setProperty("--grid-rows", rows);
  root.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.textContent = `${i + 1}`;
    container.append(newCell);
  }
};


 const changeColor = (event) => {
     let r = Math.floor(Math.random() * 256)
     let g = Math.floor(Math.random() * 256)
     let b = Math.floor(Math.random() * 256)
   event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const getGridSize = () => {
    let side = prompt('Grid side:')
    makeGrid(side,side);
}

const resetGrid = () => {
    resetButton.addEventListener('click',getGridSize);
};

resetGrid();

const divs = document.querySelectorAll('.cell');

divs.forEach(div => div.addEventListener('mouseover',changeColor));

// divs.forEach(div => addEventListener('mouseout', function(){
//     div.style.color = ''
// }));
    

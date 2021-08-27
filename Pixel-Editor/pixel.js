//POPULATE

function populatePallete() {
  const palette = document.getElementsByClassName("palette")[0];

  const colorArray = [
    "#000000",
    "#1d2b53",
    "#7e2553",
    "#008751",
    "#ab5236",
    "#5f574f",
    "#c2c3c7",
    "#fff1e8",
    "#ff004d",
    "#ffa300",
    "#ffec27",
    "#00e436",
    "#29adff",
    "#83769c",
    "#ff77a8",
    "#ffccaa",
  ];

  for (let i = 0; i < 16; i++) {
    const color = document.createElement("div");
    color.style.backgroundColor = colorArray[i];
    color.setAttribute("class", colorArray[i]);
    whenColorClicked(color);
    palette.appendChild(color);
  }
}

populatePallete();

function populateCanvas() {
  let spriteCanvas = document.getElementsByClassName("sprite-canvas")[0];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const spritePixel = document.createElement("div");
      spritePixel.setAttribute("class", `${x},${y}`);
      mouseDownOverPixel(spritePixel);
      spriteCanvas.appendChild(spritePixel);
    }
  }
}

populateCanvas();

//DRAW

function whenColorClicked(color) {
  color.addEventListener("click", (e) => {
    STORE.selectedColor = e.target.className;
  });
}

function mouseDownOverPixel(spritePixel) {
  spritePixel.addEventListener("mousedown", (e) => {
    spritePixel.style.backgroundColor = STORE.selectedColor;
  });
}

//STORE

let STORE = {
  selectedColor: "#fff1e8",
  tool: "pen",
};

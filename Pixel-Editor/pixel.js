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
    palette.appendChild(color);
  }
}

populatePallete();

function populateCanvas() {
  for (let x = 0; x < 8; x++) {
    for (let y = 8; y < 8; y++) {
      const spritePixel = document.createElement("div");
    }
  }
}

populateCanvas();

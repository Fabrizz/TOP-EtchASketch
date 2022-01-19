let modes = [selected, rainbow, grayscale];

let config = {
    currentColor: "",
    gridSize: 16,
    colorMode: 0,
}

const interactListColor =  document.getElementById("eas-interact-selected");
const interactListRainbow =  document.getElementById("eas-interact-rainbow");
const interactListGray =  document.getElementById("eas-interact-grayscale");

const interactColorPicker =  document.getElementById("eas-interact-color");
const interactBtnReset =  document.getElementById("eas-interact-reset");
const interactSliderSize =  document.getElementById("eas-interact-size");

const mpGridSize = document.getElementById("eas-mp-size");
const mpGrid = document.getElementById("eas-mp-grid");
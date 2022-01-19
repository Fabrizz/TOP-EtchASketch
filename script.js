const interactListColor = document.getElementById("eas-interact-selected");
const interactListRainbow = document.getElementById("eas-interact-rainbow");
const interactListGray = document.getElementById("eas-interact-grayscale");

const interactColorPicker = document.getElementById("eas-interact-color");
const interactBtnReset = document.getElementById("eas-interact-reset");
const interactSliderSize = document.getElementById("eas-interact-size");

const mpGridSize = document.getElementById("eas-mp-size");
const mpGrid = document.getElementById("eas-mp-grid");

const listSelectedFirst = document.getElementById("eas-selected-first");
const listSelectedSecond = document.getElementById("eas-selected-second");
const listSelectedThird = document.getElementById("eas-selected-third");

let config = {
    defaultColor: "#FFF",
    currentColor: "#000",
    gridSize: 16,
    colorMode: 0,
}

interactBtnReset.addEventListener('click', (e) => { // Reset canvas
    resetCanvas();
});
interactSliderSize.addEventListener('click', (e) => { // Update the convas size when the clic finish
    updateGrid(interactSliderSize.value);
});
interactSliderSize.addEventListener('input', (e) => { // Update the size info div when the slider is dragged
    updateInfo(interactSliderSize.value);
});
interactColorPicker.addEventListener('input', (e) => { // Update the selected color
    config.currentColor = interactColorPicker.value;
});

interactListColor.addEventListener('click', () => {
    config.colorMode = 0;
    listSelectedFirst.style.backgroundColor = "var(--eas-ui-accent)";
    listSelectedSecond.style.backgroundColor = "";
    listSelectedThird.style.backgroundColor = "";
});
interactListRainbow.addEventListener('click', () => {
    config.colorMode = 1;
    listSelectedFirst.style.backgroundColor = "";
    listSelectedSecond.style.backgroundColor = "var(--eas-ui-accent)";
    listSelectedThird.style.backgroundColor = "";
});
interactListGray.addEventListener('click', () => {
    config.colorMode = 2;
    listSelectedFirst.style.backgroundColor = "";
    listSelectedSecond.style.backgroundColor = "";
    listSelectedThird.style.backgroundColor = "var(--eas-ui-accent)";
});


updateGrid(config.gridSize);

function updateInfo(s){mpGridSize.innerText = `${s} x ${s}`;};
function updateGrid(size){
    mpGrid.innerText = "";
    mpGridSize.innerText = `${size} x ${size}`;
    mpGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mpGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    console.log(size);

    for (let i = 0; i < size*size; i++){
        const  gridChild = document.createElement('span');
        gridChild.addEventListener('mouseover', painter);
        gridChild.classList.add('eas-temporary');
        mpGrid.appendChild(gridChild);
    }
}

function painter(e){
    console.log(e);
    e.target.style.backgroundColor = painterColor();
    e.target.classList.add('eas-modified');
}

function painterColor(){
    switch (config.colorMode){
        case 0:
            return config.currentColor;
        case 1:
            return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        case 2:
            let gray = randomColor();
            return `rgb(${gray}, ${gray}, ${gray})`;
        default:
            return config.defaultColor; // Return default
    }
}

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function resetCanvas(){
    const gridElements = document.querySelectorAll('.eas-modified');
    gridElements.forEach((element) => {
        element.style.backgroundColor = config.defaultColor;
    });
}

function setColorMode(e){
    switch (e.target.id){
        case "eas-interact-selected":
            config.colorMode = 0;
            break;
        case "eas-interact-rainbow":
            config.colorMode = 1;
            break;
        case "eas-interact-grayscale":
            config.colorMode = 2;
            break;
        default:
    }
}
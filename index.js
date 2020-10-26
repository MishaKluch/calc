document.querySelectorAll('.calculator .digits button')
    .forEach( button => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}

document.querySelectorAll('.calculator .operators button')
    .forEach( button => button.addEventListener('click', operatorPressed));
function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}

document.querySelector('.calculator .cube').addEventListener('click', cubePressed);
function cubePressed() {
    const display = document.querySelector('.display');
    display.value = Math.pow(display.value, 3);
}
document.querySelector('.calculator .sqr').addEventListener('click', sqrPressed);
function sqrPressed() {
    const display = document.querySelector('.display');
    display.value = Math.pow(display.value, 2);
}

document.querySelector('.calculator .equal').addEventListener('click', equalPressed);
function equalPressed() {
    const display = document.querySelector('.display');
    display.value = eval(display.value).toFixed(2);
}

document.querySelector('.calculator .sin').addEventListener('click', sinPressed);
function sinPressed() {
    const display = document.querySelector('.display');
    display.value = Math.sin(display.value);
}
document.querySelector('.calculator .cos').addEventListener('click', cosPressed);
function cosPressed() {
    const display = document.querySelector('.display');
    display.value = Math.cos(display.value);
}
document.querySelector('.calculator .tan').addEventListener('click', tanPressed);
function tanPressed() {
    const display = document.querySelector('.display');
    display.value = Math.tan(display.value);
}
document.querySelector('.calculator .clean').addEventListener('click', cleanPressed);
function cleanPressed() {
    const display = document.querySelector('.display');
    display.value=('');
}
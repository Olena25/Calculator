const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .opers button')
    .forEach(button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .equal').addEventListener('click', equalPressed);
// натискання на довірнює
function equalPressed() {
    if (+display.value.length === 0) {
        display.value = '';
    } else {
        display.value = eval(display.value);
    }
}

document.querySelector('.calc .clean__operations .cleaning__all').addEventListener('click', cleaningAll);
// натискання на C ,стирає всі символи
function cleaningAll() {
    display.value = '';
}

document.querySelector('.calc .clean__operations .cleaning_one-char').addEventListener('click', cleaningOneChar);
//при натисканні на стрілочку, Видалення одного символу 
function cleaningOneChar() {
    if (+display.value.length > 1) {
        display.value = display.value.slice(0, display.value.length - 1)
    } else {
        display.value = '';
    }
}
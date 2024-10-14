// logic

const display = document.getElementById('display')

// memasukkan angka ke dalam display
function appendToDisplay(input) {
    display.value += input;
}


// menghapus angka yg ada di dalam display
function clearDisplay() {
    display.value = '';
}


// mengoperasikan operator 
function calculate() {
    display.value = eval(display.value);
}
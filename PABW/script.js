function tambah() {
    let operand1 = parseFloat(document.getElementById("operand1").value);
    let operand2 = parseFloat(document.getElementById("operand2").value);
    let result = operand1 + operand2;
    document.getElementById("result").textContent = "Hasil: " + result;
}

function kurang() {
    let operand1 = parseFloat(document.getElementById("operand1").value);
    let operand2 = parseFloat(document.getElementById("operand2").value);
    let result = operand1 - operand2;
    document.getElementById("result").textContent = "Hasil: " + result;
}

function kali() {
    let operand1 = parseFloat(document.getElementById("operand1").value);
    let operand2 = parseFloat(document.getElementById("operand2").value);
    let result = operand1 * operand2;
    document.getElementById("result").textContent = "Hasil: " + result;
}

function bagi() {
    let operand1 = parseFloat(document.getElementById("operand1").value);
    let operand2 = parseFloat(document.getElementById("operand2").value);
    if (operand2 !== 0) {
        let result = operand1 / operand2;
        document.getElementById("result").textContent = "Hasil: " + result;
    } else {
        document.getElementById("result").textContent = "Error: Tidak bisa dibagi dengan nol";
    }
}
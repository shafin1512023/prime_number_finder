function calculatePrimeNumbers() {
    let inputBox = document.getElementById("input-box");
    let n = Number(inputBox.value);
    inputBox.value = null;

    let outputBox = document.getElementById("output-box");
    outputBox.innerHTML = `Prime numbers among 1 - ${n}`;

    for (let i = 1; i <= n; i++) {
        let primeNumber = true;

        for (let j = 1; j <= i; j++) {
            if (j == 1 || j == i) {
                continue;
            }

            if (i % j == 0) {
                primeNumber = false;
                break;
            }
        }

        if (primeNumber && i != 1) {
            outputBox.innerHTML += `<div class="result">${i}</div>`;
        }
    }
}

let button = document.getElementById("button");

button.addEventListener("click", calculatePrimeNumbers);

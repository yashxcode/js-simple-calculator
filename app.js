const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulativeCalculation

function calculate(button) {
    const btnValue = button.textContent
    if (btnValue === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '0'
    } else if (btnValue === "=") {
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(btnValue)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
    
    
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
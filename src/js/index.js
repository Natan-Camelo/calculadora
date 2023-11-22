let equal = document.querySelector('input#display');
const buttons = document.querySelectorAll('div.button');

let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', e => {
        buttonText = e.target.innerText

        switch (buttonText) {
            case 'C':
                screenValue = ''
                equal.value = screenValue
                break

            case '÷':
                screenValue += '/'
                equal.value = screenValue
                break

            case 'X':
                screenValue += '*'
                equal.value = screenValue
                break

            case '←':
                screenValue = screenValue.slice(0, -1)
                equal.value = screenValue
                break

            case '-':
                screenValue += '-'
                equal.value = screenValue
                break

            case '+':
                screenValue += '+'
                equal.value = screenValue
                break

            case '=':
                try {
                    screenValue = eval(screenValue)
                    equal.value = screenValue

                } catch {
                    screenValue = 'Error'
                    equal.value = screenValue
                }
                break

            default:
                screenValue += buttonText
                equal.value = screenValue
        }
    })
}
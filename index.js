console.log('This is calculator');

let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('.button')
let screenValue = '';

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'x') {


            buttonText = '*'
            screenValue += buttonText
            screen.value = screenValue


        } else if (buttonText == 'C') {
            screenValue = ''
            screen.value = screenValue
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue)
        }
        else if (buttonText == 'DEL') {
            screenValue = screenValue.substr(0, screenValue.length - 1);
            screen.value = screenValue
        }
        else if (buttonText == 'sin') {
            console.log(screen.value)
            screenValue = screen.value * (Math.PI / 180);

            screenValue = Math.sin(screenValue)
            screen.value = screenValue

        }
        else if (buttonText == 'cos') {
            console.log(screen.value)
            screenValue = screen.value * (Math.PI / 180);

            screenValue = Math.cos(screenValue)
            screen.value = screenValue

        }
        else if (buttonText == 'tan') {
            console.log(screen.value)
            screenValue = screen.value * (Math.PI / 180);

            screenValue = Math.tan(screenValue)
            screen.value = screenValue

        }

        else if (buttonText == '√') {
            screenValue = Math.sqrt(screen.value)
            screen.value = screenValue
        }

        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}
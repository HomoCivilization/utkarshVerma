let str = "";
let buttons = document.querySelectorAll('button')
console.log(buttons);
let input = document.querySelector('.input');

const array = Array.from(buttons).forEach(button => {
    button.addEventListener('click', e => {
        let targetButton = e.target.innerHTML
        if (targetButton == '=') {
            str = eval(str)
            input.value = str;
        }
        else if (targetButton == "AC") {
            str = "";
            console.log(str);
            input.value = str;
        }
        else if (targetButton == "DEL") {
            str = str.slice(0, str.length - 1)
            input.value = str
        }
        else if (targetButton == '%') {
            str = str / 100
            let newStr = new String(str)
            input.value = newStr
        }

        else {
            str = str + e.target.innerHTML
            input.value = str
        }
    })

})


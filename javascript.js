
window.addEventListener('load', ()=>{ /*Escuchamps cuando se carga el documento */

    const display= document.querySelector('.calculator-display');
    const keypadButton= document.getElementsByClassName('calculator-keypad');

    const keypadButtonsArray= Array.from(keypadButton);

    keypadButtonsArray.forEach ( (button)=> {

        button.addEventListener('click', () =>{
            console.log(button.innerHTML);
        });
    })
    }
) 
function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            boorar(display)
            break;
        case '=':
            calculadora(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
    function calcular(display){
        display.innerHTML = eval(display.innerHTML)
    }
    function actualizar(display, button){
        if (display.innerHTML == 0){
            display.innerHTML = '';
        }
        display.innerHTML += button.innerHTML;
    }
  
}


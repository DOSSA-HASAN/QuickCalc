const display = document.querySelector('#displayBox');

function functionDecimal(){
    display.innerHTML += '.'
}

function function0(){
    display.innerHTML += '0'
}

function function1(){
    display.innerHTML += '1'
}

function function2(){
    display.innerHTML += '2'
}

function function3(){
    display.innerHTML += '3'
}

function function4(){
    display.innerHTML += '4'
}

function function5(){
    display.innerHTML += '5'
}

function function6(){
    display.innerHTML += '6'
}

function function7(){
    display.innerHTML += '7'
}

function function8(){
    display.innerHTML += '8'
}

function function9(){
    display.innerHTML += '9'
}

function functionAdd(){
    display.innerHTML += '+'
}

function functionMinus(){
    display.innerHTML += '-'
}

function functionMultiply(){
    display.innerHTML += '*'
}

function functionDivide(){
    display.innerHTML += '/'
}

function functionPower(){
    display.innerHTML += '**'
}

function functionBracketOpen(){
    display.innerHTML += '*('
}

function functionBracketClose(){
    display.innerHTML += ')'
}

function functionDel(){
    display.innerHTML = display.innerHTML.slice(0, -1)
}

function functionClear(){
    display.innerHTML = '';
}

function functionTotal(){
    let answer = eval(display.innerHTML)
    display.innerHTML = ''
    display.innerHTML = answer;
}
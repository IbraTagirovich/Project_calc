let a = ''; //first number
let b = ''; // second numder
let sign = ''; // знак операции
let finish = false;
const digit = ['0','1','2','3','4','5','6','7','8','9','.','00'];
const action = ['-','+','*','/'];
let acc = 0;
let arr = [];


//экран

const out = document.querySelector('.calc-screen p');

function clear_ALL () {
    a = ''; 
    b = ''; 
    sign = ''; 
    finish = false;
    out.textContent = 0;
    acc = 0;
}

document.querySelector('.clear_all').onclick = clear_ALL;
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('clear_all')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)){
        if (b === '' && sign === '') {
        
        if (Number(out) === 0 && key === '0' && key === '00') {
            return;
        } 
        a+=key;
        acc = a;
        out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish){
            finish = false;
            out.textContent = b;  
            arr[1] = b;
        }
        else {
            b += key;
            out.textContent = b;
            arr[1] = b         
          
        }
        return;
    }

    if (action.includes(key)) {
        
       sign = key;
       out.textContent = sign;
        arr[0] = sign;
            if(arr.length && b !== '' && !finish) {
                const operands = {
                    '+': (a,b) => a + b,
                    '-': (a,b) => a - b,
                    '/': (a,b) => a / b,
                    '*': (a,b) => a * b,
                }
                acc = operands[arr[2]](+acc, +arr[1])
            }
            arr[2] = arr[0];
            b ='';

       return; 
    }
    if (key === '=') {
        if (b==='') b = a;
        const currValue = acc ? acc : a;
        switch(sign){
            case "+":
                a=(+currValue) + (+b);
                break;
            case "-":
                a=currValue-b;
                break;
            case "*":
                a=currValue*b;
                break;
            case "/":
                if (Number(b) === 0) {
                    out.textContent = 'Ошибка';
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a=currValue/b;
                break;
        }
        finish = true;
        acc = a;
        out.textContent = a.toFixed(2);
    }
}

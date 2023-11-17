let a = ''; //first number
let b = ''; // second numder
let sign = ''; // знак операции
let finish = false;
const digit = ['0','1','2','3','4','5','6','7','8','9','.','00'];
const action = ['-','+','*','/'];

//экран

const out = document.querySelector('.calc-screen p');

function render () {
    a = ''; 
    b = ''; //
    sign = ''; 
    finish = false;
    out.textContent = 0;
}

document.querySelector('.clear_all').onclick = render;
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
        
        out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;

        }
        else {
            b += key;
            out.textContent = b;
        }
    
        console.log(a,b,sign);
        return;
    }

    if (action.includes(key)) {
       sign = key;
       out.textContent = sign;
       console.log(a,b,sign);
       return; 
    }
    if (key === '=') {
        if (b==='') b = a;
        switch(sign){
            case "+":
                a=(+a) + (+b);
                break;
            case "-":
                a=a-b;
                break;
            case "*":
                a=a*b;
                break;
            case "/":
                if (Number(b) === 0) {
                    out.textContent = 'Ошибка';
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a=a/b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a,b,sign);
        
    }
}

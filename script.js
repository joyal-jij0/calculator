let add = (a,b) => a +b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;
let percentage = (a,b) => ((a/b) * 100);

let operate = (operator, a, b) => {
    let ans = null;
    if (operator === (" + ")) {
        ans = add(a, b);

    } else if (operator === " - ") {
        ans = subtract(a, b);
    } else if (operator === " * ") {
        ans = multiply(a, b);
    } else if (operator === " / ") {
        ans = divide(a, b);
    } else if (operator === " % "){
        ans = percentage(a,b);
    } else {
        alert("Sorry that feature is not unlocked yet");
    }
    element.textContent = ans;
}

const element = document.getElementById("ans");

let buttons = document.querySelectorAll('.button');

let a="";
let symbol = "";
let b = "";

buttons.forEach((button) => {
    button.addEventListener('click', function clicks(){
        if(button.className === "button"){
            if(symbol === ""){
                a += this.textContent.trim();
                element.textContent = a;
            }else{
                b += this.textContent.trim();
                element.textContent = b;
            }
            // a += this.textContent.trim();
        }
        else if(button.className === "button operator"){
            symbol = this.textContent;
            element.textContent = symbol;
        }
        else if(button.className === "button equals"){
            const numA = parseFloat(a);
            const numB = parseFloat(b);
            operate(symbol,numA,numB);
        }
        else if(button.className === "button clear"){
            element.textContent = "";
            a="";
            b="";
            symbol="";
        }
        else if(button.className === "button integer"){
            if(symbol === ""){
                // a *= -1;
                a = "-"+a;
                element.textContent = a;
            }else{
                b= "-"+b;
                element.textContent = b;
            }
        }
    });
});


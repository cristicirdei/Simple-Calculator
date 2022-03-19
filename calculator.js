
document.getElementById("calculatorButtons").addEventListener("click", function(event) {
    consoleText = document.getElementById("calculatorWindow").textContent;

    if(typeof consoleText == 'undefined') {
        consoleText = "";
    }

    // the stack of all symbols (numbers and operators) from the calculator console
    stack = consoleText.split(' ').filter(function(value, index, arr){ 
        return value;
    });

    // the input symbol
    input = event.target.textContent;

    if(input != "=") {
        if($(event.target).hasClass("operation")) {
            // don't allow two consecutive operators
            if(isNaN(stack[stack.length - 1]) === false)
                $(".calculatorWindow").text(consoleText + ' ' + input + ' ');
        }
        else {
            $(".calculatorWindow").text(consoleText + input);
        }
    } else {
        $(".calculatorWindow").text(computeResult(stack));
    }

    document.getElementById("clearButton").style.display = "block";

});

document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("calculatorWindow").textContent = "";
    this.style.display = "none";
});

function computeResult(stack) {
    for(let i = 0; i < stack.length; i++) {
        if(isNaN(stack[i]) & stack[i] === '×') {
            stack[i] = (function () {
                return Number(stack[i - 1]) * Number(stack[i + 1]);
            })();
            stack.splice(i - 1, 1);
            stack.splice(i, 1);
        }

        if(isNaN(stack[i]) & stack[i] === '÷') {
            stack[i] = (function () {
                return  Number(stack[i - 1]) / Number(stack[i + 1]);
            })();
            stack.splice(i - 1, 1);
            stack.splice(i, 1);
        }
    }

    for(let i = 0; i < stack.length; i++) {
        if(isNaN(stack[i]) & stack[i] === '+') {
            stack[i] = Number(stack[i - 1]) + Number(stack[i + 1]);
            stack.splice(i - 1, 1);
            stack.splice(i, 1);
        }

        if(isNaN(stack[i]) & stack[i] === '−') {
            stack[i] = Number(stack[i - 1]) - Number(stack[i + 1]);
            stack.splice(i - 1, 1);
            stack.splice(i, 1);
        }
    }

    return stack[0];
}
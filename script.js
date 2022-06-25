

let displayToUser = document.getElementById("result");
const headerh2 = document.getElementById("header");


const character = {
    'a': 'A',
    't': 'T',
    'c': 'C',
    'g': 'G'
};


function addString(inputString) {
    let result = '';
    inputString = String(inputString);
    inputString = inputString.toUpperCase();
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i] === character.a) {
            result = result + character.t;
        } else if(inputString[i] === character.t) {
            result = result + character.a;
        } else if(inputString[i] === character.g) {
            result = result + character.c;
        } else if(inputString[i] === character.c) {
            result = result + character.g
        } else {
            result = "Enter Valid Nucleotides";
            return result;
        }
    }
    return ("Compliment Nucleotides: " + result);
}

function callMain() {
    const finalData = addString(document.getElementById("userInput").value);
    display(finalData);
}

function display(Data) {
    // console.log(Data);
    displayToUser.innerText = Data;
}

document.getElementById("btn").addEventListener("click", function() {
    displayToUser.innerText = "Converting....."
    callMain();
});

document.getElementById("userInput").addEventListener("keypress", function(event){
    if(event.key == "Enter") {
        displayToUser.innerText = "Converting....."
        callMain();
    }
});

function func() {
    var answer = document.getElementById("answer").value;
    var int1 = document.getElementById("int1").innerHTML;
    var int2 = document.getElementById("int2").innerHTML;

    if(answer != int1 * int2) {
        document.getElementById("reply").innerHTML = "Wrong, try again.";
    }
    else {
        document.getElementById("reply").innerHTML = "Correct!";
        
        let number1;
        let number2;

        const hardMode = document.getElementById('hardMode').checked; 
        if(hardMode) {
            const maxBound = 13;
            number1 = Math.floor(Math.random() * maxBound);
            number2 = Math.floor(Math.random() * maxBound);
            if(number1 == 0 || number1 == 1 || number1 == int1) { // new number is != 0 or 1 or equal to the previous number
                number1 = Math.floor(Math.random() * maxBound);
            }
            if(number2 == 0 || number2 == 1 || number2 == int2) { 
                number2 = Math.floor(Math.random() * maxBound);
            }
        }
        else {
            // select 2 new random numbers not equal to the previous
            const maxBound = 11;
            number1 = Math.floor(Math.random() * maxBound);
            number2 = Math.floor(Math.random() * maxBound);
            if(int1 == 0 || int2 == 0) { // if either of the previous number is 0, neither of the new ones are 0
                while(number1 == int1 || number1 == 0) {
                    number1 = Math.floor(Math.random() * maxBound);
                }
                while(number2 == int2 || number2 == 0) {
                    number2 = Math.floor(Math.random() * maxBound)
                }
            }
            while(number1 == int1) {
                number1 = Math.floor(Math.random() * maxBound);
            }
            while(number2 == int2) {
                number2 = Math.floor(Math.random() * maxBound)
            }
        }
        
        document.getElementById("int1").innerHTML = number1;
        document.getElementById("int2").innerHTML = number2;
        document.getElementById("answer").value = "";
    }
}

function pageLoad() {
    // console.log("page load");
    document.getElementById("int1").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("int2").innerHTML = Math.floor(Math.random() * 11);
    darkMode();
}

function darkMode() {
    const darkMode = document.getElementById("darkMode").checked;
    console.log(darkMode)
    if(darkMode) {
        document.body.style.backgroundColor = "#121e30";
        document.body.style.color = "#f7f8fa";
    }
    else {
        document.body.style.backgroundColor = "transparent";
        document.body.style.color = "black";
    }
}

document.getElementById("darkMode").addEventListener("click", darkMode);

document.getElementById("hardMode").addEventListener("click", function() {
    const int1 = document.getElementById("int1").innerHTML;
    const int2 = document.getElementById("int2").innerHTML;
    if(int1 > 10 || int2 > 10) {
        document.getElementById("int1").innerHTML = Math.floor(Math.random() * 11);
        document.getElementById("int2").innerHTML = Math.floor(Math.random() * 11);
    }
});

document.onkeydown=function(evt){
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if(keyCode == 13) {
        func();
    }

}
function func() {
    var answer = document.getElementById("answer").value;
    var int1 = document.getElementById("int1").innerHTML;
    var int2 = document.getElementById("int2").innerHTML;

    if(answer != int1 * int2) {
        document.getElementById("reply").innerHTML = "Wrong, try again. ";

        const text0 = "You're streak was ";
        const streak = document.cookie.slice(7, );
        let text1;
        if(streak > 5) {
            if(Math.floor(Math.random() * 2) == 0) {
                text1 = ". Keep it up!";
            }
            else {
                text1 = ". Good job!"
            }
            
        }
        else {
            text1 = ". Keep practicing!";
        }
        document.getElementById("streak").innerHTML = text0.concat(streak).concat(text1);
        document.cookie = "streak=0";
    }
    else {
        document.getElementById("reply").innerHTML = "Correct!";
        document.getElementById("streak").innerHTML = "";

        // increase streak
        const text = "streak=";
        let streakCount = parseInt(document.cookie.slice(7, ));
        if(Number.isNaN(streakCount)) {
            streakCount = 0;
        }
        streakCount++;
        document.cookie = text.concat(streakCount);

        let number1;
        let number2;

        const hardMode = document.getElementById('hardMode').checked; 
        if(hardMode) {
            const maxBound = 12;
            const minBound = 2;
            number1 = Math.floor(Math.random() * (maxBound - minBound + 1)) + minBound;
            number2 = Math.floor(Math.random() * (maxBound - minBound + 1)) + minBound;
            if(number1 == int1) { // new number is != 0 or 1 or equal to the previous number
                number1 = Math.floor(Math.random() * (maxBound - minBound + 1)) + minBound;
            }
            if(number2 == int2) { 
                number2 = Math.floor(Math.random() * (maxBound - minBound + 1)) + minBound;
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
            while(number1 == 0 && number2 == number1) {
                number1 = Math.floor(Math.random() * 10) + 1;
            }
        }
        
        document.getElementById("int1").innerHTML = number1;
        document.getElementById("int2").innerHTML = number2;
        document.getElementById("answer").value = "";
    }
}

function pageLoad() {
    document.getElementById("int1").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("int2").innerHTML = Math.floor(Math.random() * 11);

    // check if streak cookie exists
    if(document.cookie == "") {
        document.cookie = "streak=0";
    }

    darkMode();
}

function darkMode() {
    const darkMode = document.getElementById("darkMode").checked;
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
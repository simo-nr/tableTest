function func() {
    var answer = document.getElementById("answer").value;
    var int1 = document.getElementById("int1").innerHTML;
    var int2 = document.getElementById("int2").innerHTML;
    // console.log("answer");
    // console.log(answer);
    // console.log("int1");
    // console.log(int1);
    // console.log("int2");
    // console.log(int2);
    if(answer != int1 * int2) {
        document.getElementById("reply").innerHTML = "Wrong, try again.";
    }
    else {
        document.getElementById("reply").innerHTML = "Correct!";
        // select 2 new random numbers not equal to the previous
        number1 = Math.floor(Math.random() * 11);
        number2 = Math.floor(Math.random() * 11);
        while(number1 == int1) {
            number1 = Math.floor(Math.random() * 11);
        }
        while(number2 == int2) {
            number2 = Math.floor(Math.random() * 11)
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
}

document.onkeydown=function(evt){
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if(keyCode == 13) {
        func();
    }
}
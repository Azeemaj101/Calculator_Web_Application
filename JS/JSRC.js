var inputLabel1 = document.getElementById('Screen');

function check(obj) {
    var pushed = obj.innerHTML;
    var arr = ['+', '-', '*', '%', '/'];
    var check2 = contains(inputLabel1.innerHTML, arr);
    if (pushed == 'AC') {
        inputLabel1.innerHTML = '0';
    } else if (pushed == "." && inputLabel1.innerHTML.endsWith(".")) {
        alert("Use only one Dot a time");
    } else if (check2 == true && (pushed == "+" || pushed == "-" || pushed == "*" || pushed == "%" || pushed == "/")) {
        alert("Use Only one operater at a time");
    } else if (pushed == '=') {
        inputLabel1.innerHTML = eval(inputLabel1.innerHTML);
    } else {
        if (inputLabel1.innerHTML == '0') {
            inputLabel1.innerHTML = pushed;
        } else {
            inputLabel1.innerHTML += pushed;
        }
    }
}

function contains(target, pattern) {
    var value;
    var check1 = false;
    pattern.forEach(function(word) {
        value = String(target).includes(String(word));
        if (value == true) {
            check1 = true;
        }
        console.log(target + " " + word);
    });
    return check1;

}
let BD = document.querySelector("body");
BD.addEventListener("mouseover", function(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},146 )`;
})
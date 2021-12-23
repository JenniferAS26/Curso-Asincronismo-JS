function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function date(callback) {
    console.log(new Date); // accediendo a la fecha de este momento
    // esperar un tiempo para acceder a esto
    setTimeout(function(){
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

/* 
    ESTRUCTURA CALLBACK
        Tenemos una funcion A y una funcion B, y nuestra funcion recibe como parametro una funcion
*/
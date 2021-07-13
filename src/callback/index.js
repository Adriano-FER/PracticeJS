function sum(num1, num2){
 return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function date(callback){
    setTimeout(function (){
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

function initcolour(color){
    if (color === "red") {return date(printError)}
    if (color === "white") {return date(printDate)}
    if (color === "yellow") {return date(printWarning)}    
}

const color = "red";
initcolour(color);

function printError(dateTime){
    return console.error(dateTime);
}

function printWarning(dateTime){
    return console.warn(dateTime)
}
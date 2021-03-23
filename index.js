function add(value1, value2) {
    return(value1+value2);
}

function subtract(value1, value2) {
    return(value1-value2);
}

function multiply(value1, value2) {
    return(value1*value2);
}

function divide(value1, value2) {
    return(value1/value2)
}

function increment(value1) {
    return value1+=1;
}   

function decrement(value1) {
    return value1-=1;
}

function makeInt(value1,value2=10) {
    return parseInt(value1,value2)
}

function preserveDecimal(value1) {
    return parseFloat(value1)
}
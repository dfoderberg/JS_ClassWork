function factorial(number){
    let product = number;
    if (number > 1){
        product = factorial(number-1) * product;
    }
    else {
        return 1;
    }
    return product;
}

console.log(factorial(4) + " this is our factorial");
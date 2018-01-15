const factorial = n => {
    if(n === 1){
        return n;
    }
    return n * factorial(n-1);
};

const functions = {
    factorial
}

module.exports = functions;
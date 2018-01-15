// Program Starts here : 

const digitSum = (n, k) => {
    let concatenatedStr = n+"";
    for(let i=0; i<k-1; i++){
        concatenatedStr = concatenatedStr.concat(n);
    }
    let digitSumVal = concatenatedStr;
    while(digitSumVal.split('').length>1){
        digitSumVal = recursiveSum(digitSumVal);
    }
    return digitSumVal;
};

const recursiveSum = (arr) => {
    let sum = 0;
    arr.split('').map((val) =>{ 
       sum += parseInt(val)
    });
    return sum+"";
};


const testModule = {
    digitSum
};

module.exports = testModule;
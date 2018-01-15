
const reverseString = s => {
    let str = s;
    try{
        let arrStr = s.split('').reverse();
        str = arrStr.join('');
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        return str;
    }
};

const tryCatchFinally = {
    reverseString
};

module.exports = tryCatchFinally;
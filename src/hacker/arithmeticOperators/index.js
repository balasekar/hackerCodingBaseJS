
const getArea= (length, width) => {
    let area;
    area = (length * width);
    return area;
};

const getPerimeter= (length, width) => {
    let perimeter;
    perimeter = 2*(length + width);
    return perimeter;
};

const arithmeticOperations = {
    getArea,
    getPerimeter
};
module.exports = arithmeticOperations;
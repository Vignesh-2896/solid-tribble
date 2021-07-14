const sum = (total, curValue) => total + curValue;

const analyze = (arrayPassed) => {
    let arrayStats = {};
    arrayPassed =  arrayPassed.sort((a,b) =>  a-b);
    averageVal = arrayPassed.reduce(sum)/arrayPassed.length;
    return {
        average: averageVal,
        length : arrayPassed.length,
        min : arrayPassed[0],
        max : arrayPassed[arrayPassed.length - 1]
    };
};

module.exports = analyze;
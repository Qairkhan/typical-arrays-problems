exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        const avg = array.reduce((a, b) => a + b, 0) / array.length;
        return avg;
    }
};

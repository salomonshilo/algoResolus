// algo sqrt

var mySqrt = function(x) {
    
    const exp = 0.5 * Math.log10(x);
    return Math.floor(10 ** exp);

};

x = 144
console.log(mySqrt(x));
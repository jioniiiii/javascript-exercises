const reverseString = function(str) {

    

    let a =str.split("");//splits the word into an array of substring
    let b = a.reverse();//reverses that array
    let c = b.join("");//join the new array to a string

    return c;
};

// Do not edit below this line
module.exports = reverseString;

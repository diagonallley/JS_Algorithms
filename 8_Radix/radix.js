// ? helper methods

function getDigit(num, place) {
    if (place >= Math.abs(num).toString().length) {
        return 0;
    }
    let string = num.toString();
    return parseInt(string[string.length - 1 - place]);
}

console.log(getDigit2(12345, 0));


function digitCount(num) {
    if (num === 0) return 1;
    return num.toString().length;
}


function getDigit2(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}


function digitCount2(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    arr.forEach((el) => {
        let digits = digitCount(el);
        if (digits > max) {
            max = digits;
        }
    });
    return max;
}

console.log(mostDigits([111, 1, 22, 333, 111]));



console.log(digitCount2(12345))


function radixSort(arr) {
    let largest = mostDigits(arr);
    for (i = 0; i < largest; i++) {
        let bucket = [[], [], [], [], [], [], [], [], [], []];  // getDigit(11,2)
        // ? let buckets = Array.from({ length: 10 }, () => {
        []
        // });
        for (let el of arr) {
            bucket[getDigit(el, i)].push(el);
        }
        console.log(bucket);
        arr = bucket.flat();
        // arr = [].concat(...bucket);


    }
    console.log(arr);
    return arr;
}



radixSort([100, 3200, 11, 22, 21, 1, 2, 3, 5, 611, 222, 31, 221]);

// console.log(getDigit(-1, 2));
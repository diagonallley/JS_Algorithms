//? Frequency Counter - sameFrequency
//? Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

//? Your solution MUST have the following complexities:

//Time: O(N)

function sameFrequency(num1, num2) {
    let number1 = num1.toString().split("");
    let number2 = num2.toString().split("");

    if (number1.length !== number2.length) {
        return false;
    }

    let obj = {};
    let obj2 = {};

    obj = number1.reduce((acq, current) => {
        acq[current] = (acq[current] || 0) + 1;
        return acq;

    }, {});

    obj2 = number2.reduce((acq, current) => {
        acq[current] = (acq[current] || 0) + 1;
        return acq;

    }, {});

    for (let key in obj) {
        if (!obj[key]) {
            return false;
        }
        if (obj[key] !== obj2[key]) {
            return false;

        }
    }

    return true;



}


// console.log(sameFrequency(112, 211));


function areThereDuplicates(...args) {
    let lookup = {};


    lookup = args.reduce((acq, current) => {
        acq[current] = (acq[current] || 0) + 1;
        return acq;

    }, {});

    for (let key in lookup) {
        if (lookup[key] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));


function averagePair(arr, avg) {


    let pointer1 = 0;
    let pointer2 = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        let average = (arr[pointer1] + arr[pointer2]) / 2;
        if (average === avg) {
            return true;
        }
        else if (average > avg) {
            pointer2--;

        } else {
            pointer1++;
        }
    }
    return false;

}

console.log(averagePair([], 4.1));

function isSubSequence(str1, str2) {
    let i = 0;
    let j = 0;

    if (!str1) return true;

    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;

        if (i === str1.length) return true;
        j++;

    }
    return false;
}

function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}




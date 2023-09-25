// Write a function called same, which acceptc two arrays and returns true if every value in the array has 
// its corresponding value squared in the second array
// The order does not matter, the frequency of the value matters


function isSame(arr1, arr2) {
    let frequency = {};

    let frequency2 = {};

    if (arr1.length !== arr2.length) {
        return false;
    }

    frequency = arr1.reduce((acq, current) => {
        if (!acq[current * current]) {
            acq[current * current] = 1;
        } else {
            acq[current * current]++;
        }
        return acq;
    }, {});

    frequency2 = arr2.reduce((acq, current) => {
        if (!acq[current]) {
            acq[current] = 1;
        } else {
            acq[current]++;
        }
        return acq;
    }, {});

    console.table(frequency);
    console.table(frequency2);
    return JSON.stringify(frequency) == JSON.stringify(frequency2);
}

console.log(isSame([1, 2, 3], [4, 1, 9]));


// Given two string, write a function to determin if the second string is an anagram of the first string


// function isAnagram(str1, str2) {
//     let strArr1 = str1.split('');
//     let str = "";




//     for (let i = strArr1.length - 1; i >= 0; i--) {

//         str += strArr1[i];
//     }


//     return str == str2;

// }

// console.log(isAnagram("aaz", "zza"))


function isAnagram(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    let obj = {};
    let obj2 = {};


    obj = arr1.reduce((o, current) => {
        o[current] = (o[current] || 0) + 1;
        return o;

    }, {})

    obj2 = arr2.reduce((o, current) => {
        o[current] = (o[current] || 0) + 1;
        return o;

    }, {})


    for (let el in obj) {
        if (!obj2[el]) {
            return false;

        }

        if (obj2[el] != obj[el]) {
            return false;
        }


    }
    return true;

}

console.log(isAnagram("elbow", "below"));

function isAnagram2(str1, str2) {

    if (str1.length !== str2.length) return false;
    return str1.split("").sort().join("") == str2.split("").sort().join("");
}


console.log(isAnagram2("elbow", "below"));


function isAnagram3(str1, str2) {
    if (str1.length !== str2.length) {
        return false;

    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];

        lookup[element] ? lookup[element] : lookup[element] = 1;


    }

    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }



    }

    return true;
}

console.log(`This is from anagram3: ${isAnagram3("string", "gnstri")}`)




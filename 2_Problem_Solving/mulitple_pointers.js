//? Write a function called sumzero which accepts a sorted array of integers 
//? The function should find the first pair of numbers where the sum is zero
//? Return an array that includes the pair of numbers that sum to zero or undefined

// function sumZero(arr) {
//     let array = [];

//     arr.reduce((acq, current) => {

//         if (acq + current === 0) {
//             array.push(acq, current);
//             return false;


//         }

//         return acq;

//     });


//     if (!array.length) {
//         return undefined;
//     }
//     return array;
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));


function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;  //? Since the array is sorted, and we get a sum that is greater than 0, we need to move left hence right --

        } else {
            left--; //? since the array is sorted, and we get a sum that is smaller than 0, we need to move right, hence left -- 
        }

    }


}

//? Create a function called CountUniqueValues, which accepts a sorted array returns the count of unique values in that array. There can be negative elements in the array, but it will always be sorted

function countUniqueValues(arr) {

    if (arr.length === 0) return 0;
    let ptr1 = 0;
    let ptr2 = 1;
    let countOfUnique = 0;

    for (let el of arr) {
        let left = arr[ptr1];
        let right = arr[ptr2];

        if (left !== right) {
            countOfUnique++;

        }
        ptr1++; ptr2++;


    }

    return countOfUnique;

}





function countUniqueValues2(arr) {
    let i = 0;
    if (arr.left === 0) return 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];



        }

    }
    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8]));
console.log(countUniqueValues2([1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8,]));


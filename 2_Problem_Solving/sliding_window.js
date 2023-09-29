//? write a funciton called maxSubArraySum which accepts an array of integers and n . The function should calculate the maxiumum sum of n consesecutive elements in the array


function maxSubArraySum(arr, n) {

    if (arr.length === 0) {
        return null;
    }

    let maxSum = 0;

    // for (i=0;i<arr.length;i++){
    //     let array=arr.slice(i,i+4);

    // }

    arr.sort((a, b) => {
        return a - b;
    });

    let returnArr = arr.slice(-n);

    return returnArr.reduce((acq, current) => {
        return acq = acq + current;

    });
}




function maxSubArraySum2(arr, num) {
    if (arr.length < num) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (j = num; j < arr.length; j++) {
        tempSum = maxSum - arr[j - num] + arr[j];
        tempSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}


console.log(maxSubArraySum([11, 1, 12, 2, 121, 11, 2, 1, 2, 31], 4));
console.log(maxSubArraySum2([11, 1, 12, 2, 121, 11, 2, 1, 2, 31], 4));


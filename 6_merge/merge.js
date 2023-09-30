function mergeTwo(arr1, arr2) {
    let mergedArr = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j] || arr1[i] === arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            mergedArr.push(arr2[j]);
            j++;
        }

        // if (i === arr1.length) {
        //     mergedArr = mergedArr.concat(arr2.slice(j));
        //     break;
        // } else if (j === arr2.length) {
        //     mergedArr = mergedArr.concat(arr1.slice(i));
        // }
    }




    while (i < arr1.length) {

        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) { mergedArr.push(arr2[j]); j++ }

    return mergedArr;
}

console.log(mergeTwo([1, 2, 11, 22, 1000], [10, 17, 44, 55]));

console.log(mergeTwo([100], [11, 23])); 
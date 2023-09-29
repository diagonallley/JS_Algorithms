
function binarySearch(arr, el) {
    let left = 0;
    let right = arr.length - 1;


    let middle = Math.floor((right + left) / 2);

    while (el !== arr[middle] && left <= right) {


        if (el > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
    }
    if (arr[middle] === el) {
        return middle
    }
    return -1;





}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 11, 123, 126], 125));

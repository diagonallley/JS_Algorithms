// Quick Sort implementation

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;


    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
            console.log(arr);

        }
    }

    swap(arr, swapIdx, start);
    // console.log(arr);

    return swapIdx;

}


function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));


function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1); //? left
        quickSort(arr, pivotIndex + 1, right);//? right


    }
    return arr;


}

console.log(quickSort([21, 22, 1, 12, 111, 2, 2222, 121, 3]));
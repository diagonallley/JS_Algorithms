function bubbleSort(arr) {
    let noSwaps = false;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        console.log("One round")
        if (noSwaps) break;
    }
    return arr;
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}



//   12,13,14,15,23,12,1


function selectionSort(arr) {
    let minEl;
    let minValue = arr[0];
    let isSorted = false;
    minEl = 0;
    let j = 0;
    for (let i = j; i < arr.length; i++) {


        if (minValue !== arr[minEl]) {
            swap(arr, 0, minEl)
        }
    }
}




function selectionSort2(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            // console.log(i)
            if (arr[j] < arr[lowest]) {
                lowest = j;

            }

        }
        if (i !== lowest) {

            swap(arr, lowest, i);
        }


    }
    return arr;
}

console.log(selectionSort2([8, 112, 2, 3, 1, 5, 6, 7]));
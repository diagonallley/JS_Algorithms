
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
function bubbleSort(arr) {
    // console.log(arr);
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }

    }
    return arr;
}

console.log(bubbleSort([1, 2, 311, 20, 23, 17]));
console.log(selectionSort([1, 2, 311, 20, 23, 17]));

function selectionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }


        }
        if (i !== lowest) {
            swap(arr, lowest, i)
        }


    }
    return arr;
}



function bubbleSort(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        let noSwaps;
        for (let j = 0; j <= j - 1; j++) {
            noSwaps = true;
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }

        if (noSwaps) {
            break;
        }



    }
    return arr;

}


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[lowest]) {
                lowest = i;
            }
        }

        if (lowest !== i) {
            swap(arr, lowest, i);
        }
    }
    return arr;
}
function linearSearch(arr, searchThis) {
    for (let element of arr) {
        if (element == searchThis) {
            return arr.indexOf(element);
        } 
    }
    return -1;
}


console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 2));
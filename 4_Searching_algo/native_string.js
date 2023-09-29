function searchThis(string, toSearch) {
    let count = 0;
    let isContinue = true;
    while (isContinue) {
        if (string === "") {
            break;
        }
        if (string.indexOf(toSearch) === 0) {
            count++;
            string = string.slice(toSearch.length);
        } else {
            string = string.slice(1);
        }
    }
    return count;
}
    
console.log(searchThis("sattttttttarttstt", "tt"));


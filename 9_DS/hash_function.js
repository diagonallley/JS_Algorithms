function hash(string, length) {
    let total = 0;

    Array.from(string).forEach((el) => {
        let value = (el.charCodeAt() - 96);
        total = (total + value) % length;
    });
    return total;
}



function hash2(string, length) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(string.length, 100); i++) {
        let char = string[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % length
            ;
    }
    return total;
}

console.info(hash2("pink", 13));
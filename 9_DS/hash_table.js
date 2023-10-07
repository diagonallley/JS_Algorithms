class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);

    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < (Math.min(key.length, 100)); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }


    set(key, value) {
        let hashKey = this._hash(key);
        // console.info(hashKey);

        if (this.keyMap[hashKey] && this.keyMap[hashKey][0]) {
            this.keyMap[hashKey].push([key, value]);
        } else {
            let push = new Array([key, value]);
            this.keyMap[hashKey] = push;


        }

        // if (!this.keyMap[hashKey]) {
        //     this.keyMap[hashKey] = [];
        // }
        // this.keyMap[hashKey].push([key, value]);

        return hashKey;
    }

    get(key) {
        let hashKey = this._hash(key);
        // let value;
        if (!this.keyMap[hashKey]) return undefined;

        for (let el of this.keyMap[hashKey]) {
            if (el[0] === key) return el[1];
        }

        // this.keyMap[hashKey].forEach((el) => {
        //     if (el[0] === key) return value = el;
        // });
        // return value;
    }

    keys() {
        let keys = [];

        for (let key in this.keyMap) {
            if (key) {

                this.keyMap[key].forEach((el) => {
                    if (!keys.includes(el[0])) {
                        keys.push(el[0]);
                    }
                });
            }

        }
        return keys;
    }

    values() {
        let values = [];
        for (let key in this.keyMap) {
            if (key) {

                this.keyMap[key].forEach((el) => {
                    if (!values.includes(el[1])) {
                        values.push(el[1])
                    }

                });
            }
        }
        return values;
    }
}

let table = new HashTable();
table.set("pink", "#ase112");
table.set("yellow", "#aa1232");
table.set("beige", "#ase212");
table.set("teal", "#aae212");
table.set("orange", "#aae212");
table.set("lilac", "#aae212");
table.set("lilac", "#aaq1ew");



// console.log(table.keyMap);
// console.log(table.get("beige"));
console.log(table.keys())
console.info(table.values());

table.keys().forEach((key) => {

    console.log(`${key} : ${table.get(key)}`);
});


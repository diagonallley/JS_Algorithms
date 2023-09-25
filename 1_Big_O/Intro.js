//? BIG O Notation

//? Solution 1:
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// let t1=performance.now();

// console.log(addUpTo(1000000000));

// let t2=performance.now();

// console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);

//? Solution 2:

function addUpTo2(n) {
    return n * (n + 1) / 2;
}


let t1 = performance.now();

console.log(addUpTo2(1000000000));

let t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// console.log(addUpTo2(6));

//? The problem with time

//? different machines will record different times 

//? The same machine may show different times

//? For fast algorithms, speed measurements are not precise enough

//? If not Time then what:
// Rather than couting time, which is variable 

// Let's count the number of simple operations the computer has to perform

//? Counting Operations 
//? in the second solution only three operations are happening 

//? In the first solution there is a loop therefore there are n *(2) operations 

// ? ++,+=, one assigment at the start, one assigment in the loop, comparision happens n times 

//? 5n+2

//? we care about general trend, as n grows, the number of operations grows proportionally with n


function charAt(str) {
    const array = str.toUpperCase().split("");

   const obj=array.reduce((o,current)=>{
    if(/[a-z0-9]/.test(current)){
        o[current]=++o[current]||1;

        return o;
    }
    },{});

    return obj;

}
//symetric difference 

const symOfTwo = (arg1, arg2) => {
    let output = []
    for(let el of arg1) {
        if(!output.includes(el) && !arg2.includes(el)) {
            output.push(el)
        }
    }
    for(let el of arg2) {
        if(!output.includes(el) && !arg1.includes(el)) {
            output.push(el)
        }
    }
    return output;
}

function sym() {
 const arrOfArrays = [...arguments]
 let result = arrOfArrays[0]
 for(let i = 1; i < arrOfArrays.length; i++) {
    result = symOfTwo(result, arrOfArrays[i])
 }
 return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);

console.log(sym([1, 2, 3], [5, 2, 1, 4]))
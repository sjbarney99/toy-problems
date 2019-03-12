const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90];

const isGreaterThan10 = (num) => {
    return num > 10;
}

const arrGreaterThan10 = (arr, callback) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]);    
        }
    }
    return newArr;
}
console.log(arrGreaterThan10(numbers, isGreaterThan10));
// function processData(randomNumber){
// let randomNumber = new Array(10);
// for (i=0; i<randomNumber.length; i++){
//     randomNumber[i] = (Math.floor(Math.random()*1000))
// }

//     firstLargestNum = Math.max(...randomNumber)
//     index = randomNumber.indexOf(firstLargestNum)
//     randomNumber.splice(index,1)
//     secondLargestNumber = Math.max(...randomNumber)
//     return (secondLargestNumber)
// }
// console.log(randomNumber)
// console.log(secondLargestNumber)
let randomNumber = new Array(10);
let max1 = secondLargest =0
let min1 = secondSmallest = 1000
for (i=0; i<randomNumber.length; i++){
    randomNumber[i] = (Math.floor(Math.random()*1000))
    if(max1<randomNumber[i]){
        secondLargest = max1;
        max1 = randomNumber[i]
    }
    if(secondLargest<randomNumber[i] && randomNumber[i]<max1){
        secondLargest =randomNumber[i]
    }

    if(min1>randomNumber[i]){
        secondSmallest = min1;
        min1 = randomNumber[i]
    }
    if(secondSmallest>randomNumber[i] && randomNumber[i]>min1){
        secondSmallest=randomNumber[i]
    }
}
randomNumber.sort();
console.log(randomNumber)
console.log(max1)
console.log("The Second Largest num is -> " +secondLargest)
console.log(min1)
console.log("The Second Smallest num is -> " + secondSmallest)
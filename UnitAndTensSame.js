let firstNum = 1;
let finalnum = 100;
let repeatNum = new Array();
for(i=firstNum;i<finalnum;i++){
    if(i%11 === 0){
        repeatNum.push(i)   
    }
}
    console.log("Repeating num -> " + repeatNum)
console.log(repeatNum)


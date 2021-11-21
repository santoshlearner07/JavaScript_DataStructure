
const roll = new Array();
const x = 11;
let i =0;
// while(i<x){
//     let Dice = Math.floor(Math.random()*10)%6
//     Dice += 1; 
//     roll.push(Dice)
//     i++;
// }
for(a=0;a<x;a++){
    if(a !=10){
        let Dice = Math.floor(Math.random()*10)%6
        a += 0
        roll.push(Dice)
            for(b=0;b<x;b++){
                if(b !=10){
                    let Dice = Math.floor(Math.random()*10)%6
                    b += 0
                    roll.push(Dice)
        }
    }}
}
const mySet = new Set(roll)
console.log("Array of Roll -> "+roll)
console.log(roll.length)
console.log("Set of Roll -> ")
console.log(mySet)
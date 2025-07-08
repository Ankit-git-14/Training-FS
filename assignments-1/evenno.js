function evenno(){
let numbers =[22,21,30,31,50,41,60,65];
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}
}
module.exports = evenno;
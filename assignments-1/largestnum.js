function largestnum(){
    let array=[12,20,480,55,132,0];
    let largest=array[1];
    for (let i=0;i<array.length;i++){
        if(array[i]>largest){
            largest=array[i];
        }
    }
    console.log(largest);
}
module.exports = largestnum;
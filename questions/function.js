function functionexample(){
    function x(name){
        return `this is ${name}`
    
    }
    const square = n => n*n;
    //default parameter
    function df(msg="hi"){
        console.log(msg);
    }
       //returns object
       function getusers(){
        return{name:"subhojit",age:30};

       }

       //nested function
       function outer(){
        function inner(){
           return "inner function";

        }
        return inner();
       }
  console.log(x("not good"))
  console.log(squere(5))
}
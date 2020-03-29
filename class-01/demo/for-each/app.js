
 let myArray = ['a','b','c'];

 myArray.forEach( function(value, i) {
   console.log(i);       // 0, 1, 2
   console.log(value);   // a, b, c
 })

 let numbers = [5,6,7,10,12,125,98,147];
 numbers.forEach( function(value,idx){
   if(value%2) {console.log(value);}
 });

 numbers.forEach( (value,idx) => {
    if(value%2) {console.log(value);}
  });
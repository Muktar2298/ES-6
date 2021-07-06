// --normal function --//
/* function add (n1,n2=5){
    const sum = n1 + n2;
    return sum;
}
const result = add(5);
console.log(result);*/


// --using "function expression" --//
/* const add = function(n1,n2) {
    return n1 + n2;
}
const result = add(5,10);
console.log(result); */



                                             // ---using "arrow function" --//
                                             
const add = (n1, n2) => n1 + n2;
const result = add(10, 20);
console.log(result);

// --multiple line functionality using "arrow function" --//
const calculation = (n1, n2) => {
  const sum = n1 + n2;
  const diff = n1 - n2;
  const result = sum * diff;
  return result;
};
const result2 = calculation(30, 20);
console.log(`Calculation: ${result2}`);

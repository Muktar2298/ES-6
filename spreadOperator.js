                                           //---array "concate" in normal way ---//
const num1 = [1,2,3,4,5,6,7,8,9];
const num2 = [10,11,12,13,14,15,16,17,18];
const num3 = [19,20,21,22,23,24,25,26,27,28];
// const allNumbers = num1.concat(num2).concat(num3);
const allNumbers = num1.concat(num2).concat([5]).concat(num3);   ///---concat a single array element ---//
// console.log(allNumbers);



                                             // ---Using "spread operator" concat multiple arrays ---//

// const allNumbers2 = [num1,num2,num3];     //--nested arry hoye jabe ---//
// console.log(allNumbers2);
// console.log(...num1);  //--access all array element --//

const allNumbers3 = [...num1,...num2,5,...num3];    // ---(...num1,...num2,...num3 = means acces all array element)   & then store in a array [...num1,...num2,...num3]---/
console.log(allNumbers3);


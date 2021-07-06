 /* function add (n1,n2,n3){
     return n1 + n2 + n3;
 }

 const result = add(1,2);
 console.log(result); */   //--result will be "Nan",Because not passes all perameter value.//




//  ---In old way to set default perameter value --//
 /* function add (n1,n2,n3){
     n2 = n2 || 0; 
     n3 = n3 || 0;        //--means --if n2 or n3 perameter value is given then it...if not passes  then 0--//
    return n1 + n2 + n3;
}

const result = add(1,2);
console.log(result);  */ 




//--In ES-6 ,,We can set a function default perameter value --//
 function add (n1,n2 = 10,n3 = 0){              //--We can set any default perameter value --//
          
    return n1 + n2 + n3;
}
// const result = add(10,20,20);
const result = add(10);
console.log(result);  
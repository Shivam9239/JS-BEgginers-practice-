const even_or_odd = number =>{
// if(number%2==0){
//     return 'Even';
// }else{
//     return 'odd';
// }
// }

// console.log(even_or_odd(2));
// console.log(even_or_odd(1));
// console.log(even_or_odd(586));
// console.log(even_or_odd(74));

//or we can use ternary operator

return number%2==0 ? 'Even':'Odd';}

console.log(even_or_odd(225))
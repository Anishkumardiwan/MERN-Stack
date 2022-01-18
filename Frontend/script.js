function sayHello(){
    return "Hello Anish" ;
}

let result = sayHello()
console.log(result);

let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 }
];

// FOREACH ---------
// products.forEach( (value , index) => {
//     console.log(value , index);
// });

// MAP ------------
// products.map((products , index) => {
//     products.price+=100;
// });

// console.log(products)

// let x = [1,2,3,4,5]

// let newArray = x.map((item)=>{
//     return item*10;
// });

// console.log(x);
// console.log(newArray);

// Filter---------
// const x = 800
// let filterProduct = products.filter((product) => {
//     return product.price >= x ;
// });

// console.log(products);
// console.log(filterProduct);

// SORT ------------
// products.sort( (x,y) => {
//     if (x.name > y.name){
//         return 1;
//     } else if(x.name < y.name){
//         return -1;
//     } else{
//         return 0;
//     }
// });

// console.log(products);


// REDUCE ---------

// const myArray = [1,2,3,4,5,6]

// let sum = myArray.reduce((accumulator,val)=>{

//     return accumulator+val ;
// },0)
// console.log(sum)



// let totalPrice = products.reduce((acc,product)=>{
//     return acc+product.price;
// },0)

// console.log(totalPrice);



let allNames = products.reduce((acc,product)=>{
    acc.push(product.name);
    return acc;
},[])

console.log(allNames);













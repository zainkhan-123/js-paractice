// //using filter method that returns the values 
// //The filter() method creates a new array filled with elements that pass a test provided by a function.
// const mynum = [1,2, 3,4,5,6]
// // const newnum = mynum.filter((num)=> num > 2 )
// // console.log(newnum)
// //  const newwnum = mynum.filter((num)=> {
// //      return num > 2} )
// // console.log(newwnum)

// const  newval = []
// mynum.forEach ((val) =>{
//     if (val > 3 ) {
//         newval.push(val)}
// })
// // console.log( newval)

// // RETRIEVE A DATA FROM ARRAY  THIS ALSO HAPPEN IN DATA BASE 
// const  books =[ 
//     {
//         title : 'bookfive', genr :'science', publish :'1989'

//     },

//     {
//         title : 'booksix', genr :'histry', publish :'2009'
        
//     },
//     {
//         title : 'bookseven', genr :'maths', publish :'2009'
        
//     }
// ];
// // const booksdata = books.filter((val)=> val.genr === 'histry'  )
// // console.log(booksdata);
// const booksdata = books.filter((val)=>{  return val.publish > 2000 && val.genr === 'maths'

// } )
// console.log(booksdata);

// // map
// const  mynumers = [1,2,3,4,5,6,7,8,9]
// const newnum = mynumers.map((val)=> val + 2)
// console.log(newnum);









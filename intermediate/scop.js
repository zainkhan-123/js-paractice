let h = 300
if (true){ 
    let a = 400
    const b = 500
// console.log('inner: ' ,a);

//  console.log(h)
}
// console.log(a)

    function one(){
 const userName  = " iam function one"
   function two(){
    const website = "zainkhani"
    // console.log(userName)
   }
//    console.log(website)
//    two()
}

// one()

if (true){
     const  myuser = "zain"
     if (myuser === "zain") {
const accountno = 123
// console.log(myuser + accountno);
     }
// console.log(accountno)

    }
// console.log(myuser)
// addone(5)

// function addone(num){
//     return  num+1
// }
// addtwo(10)
//  const aja = function addtwo(num){
//     return num+2
//  } 

const user ={
username : "khan",
price : 222,

welcomemassge : function() {
    console.log(`${this.username} , welcome to my website which is your ${this.price}` );

// console.log(this)
}
}
// user.welcomemassge(),
//  user.username = "yr zain hu"
// user.welcomemassge()

// function chai(){
//     let userkaname = "waram"
// console.log(this)


    
// }
// chai()

// const chaii = () => {

// console.log(this)


// }
// chaii()

const add1 = (numm1,numm2) =>  numm1 + numm2;


console.log(add1(1 ,2))

const add2 = (num1 , num2) => ({username : "ik"})
console.log(add2(3,7));c

// function myfun(){
//     console.log("as");
//     console.log("ds");
//     console.log("cx");
//     console.log("hh");
//     console.log("oo");
// }
// myfun()

function AddTwoNumbers(Number1 , Number2){
    // let result = Number1 + Number2
    // return result
    return Number1 + Number2
    


}
const result = AddTwoNumbers(3 , 3)
// console.log("RESULT : " , result)
// AddTwoNumbers(2,3)

function loginUserMassge (userName = "zain"){
    if(!userName){
        // console.log("plzz enter user name ");

return;
    }
    // return `${userName} just login `

}
// console.log(loginUserMassge("khanii"))

function calculateCardPrice ( val2 ,...num1 ){
return (num1)
}
// console.log(calculateCardPrice(200,300))

const user = {
    userName : "khanii",
    email :" khani@gmail.com"

}
function handleObject (anyobject) {

// console.log(`username is ${anyobject.userName} and email is ${anyobject.email}`)

}
// handleObject(user)

//array
const myArray =[200,400,500]
function myarryValue(newArry){
return(newArry[1])


}
// console.log(myarryValue([200,400,500]));

//imediate invoked function 
//global scope  ky  pollution ki waja sy  problem hoti hy ore ya global scope (var etc) ky pollution ko hatany kaliye hum iffe ka use karty hein
;
(function chai(){
console.log( `dta connect`)
})()
;
( (name)=>{
    console.log( `dta connect ${name}`)
    })("zain")
    // that both is iffe
    





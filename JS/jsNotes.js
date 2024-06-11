// // console.log(8 + ' ' + "this should be a string type isn't ");
// // console.log('this is also string but it has a disadvantage isn\'t');
// // console.log(
// //   `${4+4} third type of string which is also a string but can do something really interesting`
// // );

// // let myGreeting = "Hello X-ray"

// // // myGreeting[0] = 'h'

// // // myGreeting[6]= 'x'

// // myGreeting = myGreeting.toLowerCase()

// // console.log(myGreeting)

// // console.log(1 + 2.5565)

// // // console.log(true)
// // // console.log(false)
// // let myVar = "123"
// // let myVar2 = 123

// // if (myVar.length < 4) {
// //   console.log("this is true");
// // }
// // else if(myVar.length === 3){
// //   console.log("this is from the else if")
// // }
// // else {
// //   console.log("this is false")
// // }
// // array_of_days
// // let arrayOfDays = [
// //   "Monday",
// //   "Tuesday",
// //   "Wednesday",
// //   "Thursday",
// //   123,
// //   '123'
// // ]
// // console.log(arrayOfDays[5])
// // arrayOfDays[5]= 'Saturday'
// // arrayOfDays.push("Sunday")
// // console.log(arrayOfDays)

// // let employee = {
// //   //key : value
// //   name: "francisco",
// //   age: 12,
// //   shoes: null,
// //   profession: "Eating",
// // };

// // let employees = [
// //   {

// //   },
// //   {

// //   }
// // ]

// // const {age, profession} = employee

// // console.log(Object.entries(employee))

// // for (let [key, value] of Object.entries(employee)){
// //   // console.log(arr)
// //   // let [key, value] = arr
// //   // console.log(key, value)
// //   console.log(value)
// // }

// // console.log(age)
// // let staff = ["Adam", "Francisco", "Nick", "Raphael", "Benjamin", "Zaynab"];
// // let staffObjects=[]
// // for(let member of staff){
// //   staffObjects.push({
// //     "firstName":member,
// //     "age":12,
// //     "description":"awesome"
// //   })
// // }
// // // for (let staff of staffObjects){
// // //   let {firstName, age, description} = staff
// // //   console.log(firstName)
// // // }
// // let [a,f,,,z] = staffObjects
// // let {description} = a
// // // let {firstName, age, description} = francisco
// // console.log(description)

// // const employee_extended = {
// //   ...employee,
// //   workingDays: myArr,
// // };
// // console.log(employee);
// // console.log(employee_extended);
// // console.log([employee, ...myArr])
// // myArr.push(employee)
// // console.log(myArr)
// // let [,,, thur] = myArr;
// // console.log(thur)

// // employee["new_key"] = "I am now a new key"
// // console.log(employee);
// // delete employee["new_key"]
// // console.log(employee);
// // // {
// // //   "key": [
// // //     {},
// // //     {},
// // //     {},
// // //   ]
// // // }

// // let myVar = ['srtast','stawer','duioh']
// // for idx in range(len(myVar)):[0,1,2,3,4,5,6,7,8]
// // console.log(myVar.length)
// // for (let idx=0; idx < myVar.length; idx++){
// //   console.log(myVar[idx])
// // }
// // for char in myVar:
// // for (let word of myVar){
// //   console.log(word)
// //   for (let char of word){
// //     console.log(char)
// //   }
// // }

// // let aVar = false
// // //   if (avar){ trueVar = "this is trues"} else {trueVar = "this is false"}
// // let trueVar = 10 > 11 ? "this is true" : 10 < 11 ? "this is from my else if" : "this is false"
// // console.log(trueVar)
// // let aNumber = 33

function addTwo(num) {
    // console.log(aNumber)
    let result = num + 2;
    return result;
  }
  
  // let arrNums = [2,3,4,5,6]
  // let numsPlusTwo = arrNums.map((num, i)=>{
  //   console.log(i)
  //   return num + 2
  // })
  // // let numsPlusTwo = []
  // // const addTwo = (num) => {
  // //   let result = num + 2
  // //   return result
  // // }051
  
  // // for (let num of arrNums){
  // //   numsPlusTwo.push(addTwo(num))
  // // }
  // console.log(numsPlusTwo)
  // // let result = addTwo(5)
  // // console.log(result)
  const factorial = (num) => {
    let product = 1;
    for (let i = num; i > 0; i--) {
      product = product * i;
    }
    return product;
  };
  
  const createFullName = (fName, lName) => {
    if (typeof fName !== "string" || typeof lName !== "string") {
      return "These arguments are not string";
    }
    return `${fName} ${lName}`;
  };
  
  module.exports = { factorial, createFullName };
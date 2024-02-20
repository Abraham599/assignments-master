// function greet(lastName:string) {
//     console.log("Abraham" + lastName);
// }

// greet("Richard");


// function sum(num1:number, num2:number): number {
//     return num1+num2;
// }

// console.log(sum(1,2));
// interface User{
//     firstName: string,
//     lastName: string,
//     age:number
// };

// function isLegal(user:User) {
//     if (user.age > 18) {
//         return true;
//     } else {
//         return false
//     }
// }

// isLegal({
//     firstName: 'Abraham',
//     lastName: 'Richard',
//     age: 21
// });
// function runAfter1S(fn:()=>void){
//     setInterval(fn,1000);
// }

// runAfter1S(()=>{
//     console.log("hi ");
// })

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee | Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  

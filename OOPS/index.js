// const customer1 = {
//   name: 'vivek',
//   accountBalance: 1000,
//   bank: 'HDFC',
//   addMoney(amount) {
//     this.accountBalance += amount
//   },
// }

// // console.log(customer1.accountBalance)
// // customer1.addMoney(500)
// // console.log(customer1.accountBalance)

// function createCustomer(name, branch, accountBalance) {
//   const customer = Object.create({
//     addMoney: function (amount) {
//       customer.accountBalance += amount
//     },
//   })
//   customer.name = name
//   customer.branch = branch
//   customer.accountBalance = accountBalance

//   return customer
// }

// const customer2 = createCustomer('shovam', 'cbi', 2000)
// const customer3 = createCustomer('akshay', 'sbi', 5000)
// const customer4 = createCustomer('ashish', 'Idbi', 4000)

// console.log(customer2)
// customer2.addMoney(3000)
// console.log(customer2)
// customer3.addMoney(3000)
// console.log(customer3)
// console.log(customer4)

//better way to creating a object but it has some issues
//every time function is called its creating a new object
//

// const customer2={
//   name:'Sun',
//   accountBalance:5000,
//   bank:"sbi",
//   addMoney(amount){
//     this.accountBalance+=amount
//   }
// }

function createCustomer(name,branch,currentBalance){
  this.name=name;
  this.branch=branch;
  this.currentBalance=currentBalance
  this.addMoney=function(amount){
this.currentBalance+=amount
  }
}
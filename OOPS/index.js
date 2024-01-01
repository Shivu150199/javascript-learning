const customer1 = {
  name: 'vivek',
  accountBalance: 1000,
  bank: 'HDFC',
  addMoney(amount) {
    this.accountBalance += amount
  },
}

// console.log(customer1.accountBalance)
// customer1.addMoney(500)
// console.log(customer1.accountBalance)

function createCustomer(name,branch,accountBalance){
    const customer={}
    customer.name=name
    customer.branch=branch
    customer.accountBalance=accountBalance;
    customer.addMoney=function(amount){
        customer.accountBalance+=amount
    }
     return customer; 
} 

const customer2=createCustomer('shovam',"cbi",2000)
console.log(customer2)
customer2.addMoney(3000)
console.log(customer2)

//better way to creating a object but it has some issues 
//every time function is called its creating a new object
//
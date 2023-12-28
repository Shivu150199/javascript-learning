const customer1 = {
  name: 'vivek',
  accountBalance: 1000,
  bank: 'HDFC',
  addMoney(amount) {
    this.accountBalance += amount
  },
}

console.log(customer1.accountBalance)
customer1.addMoney(500)
console.log(customer1.accountBalance)
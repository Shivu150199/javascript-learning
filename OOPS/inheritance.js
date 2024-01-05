function bankAccount(name,branch,accountBalance){
    this.name =name;
    this.branch=branch;
    this.accountBalance=accountBalance;

}


bankAccount.prototype.addMoney=function(amount){
    this.accountBalance+=amount;
}

bankAccount.prototype.withdraw=function(amount){
    this.accountBalance-=amount;
}
const user1=new bankAccount('Suraj',"HDFC",5000)

// hi my name is shivam singh gautam i am from  fatehpur uttarpradesh

console.log(user1)


//how many types of bank account are there?saving and current
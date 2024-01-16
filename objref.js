// let a=20
// let b=a;
// console.log(a===b)

// a=30
// console.log(a==b)

// b=a
// console.log(a==b)

// let a={
//     name:'sachin',
//     role:'frontend developer',

// }
// a.name//sachin
// a.role//fd
// let b=a

// console.log(a==b)
// console.log(b.name)
// console.log(b.role)

// b.name='ashish'

// console.log(a.name)
// console.log(b.name)

// let clone={}
// for(let i in a){
//     clone[i]=a[i]
// }
// console.log(clone)
// clone.name='ashish'
// console.log(clone)
// console.log(a)


// let c=Object.assign({},a)
// console.log(c)


// let user={
//     id:1,
//     title:"ramayan",
//     sayHi(){
//         console.log('hello')
//     }
// }
// user.sayHi()
// user.sayHi()
// user.sayHi()
// user.sayHi()

// let calculator = {
//   sum() {
//     return this.a + this.b
//   },

//   mul() {
//     return this.a * this.b
//   },

//   read() {
//     this.a = 2
//     this.b = 3
//   },
// }

// calculator.read()
// // alert(calculator.sum())
// // alert(calculator.mul())
// console.log(calculator.sum())


// let name='shivam'
// let obj={
//     step:0,
//     name:'uk',
//     age:'16',
//     callMe(){
// console.log(`hello ${this.name} how are you you age is ${this.age}`)
//     },
//     increment(){
//  this.step++  
//       console.log(this.step)

//     }
// }
// obj.callMe()
// let a=obj.increment()
// console.log(a)

// console.log(obj.step)


// class MathUtility{
//  static sum(a,b){
//     return a+b
//  } 
// static multiply(a,b){
//     return a*b
// }
// //static give high priority to any thing 
// }
// // let MathUtilityObj=new MathUtility()

// // console.log(MathUtilityObj.sum(10,20))

// console.log(MathUtility.sum(30,44))


class Engine2{
    start(){
        console.log('enfine 2 started ')
    }
}


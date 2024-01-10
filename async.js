// console.log('start')
// setTimeout(()=>{
//     console.log('mid')
// },0)

// console.log('end')

// // first print the start then end then mid
// // if change the time to 0 what will be the output;
// console.log('start')
// setTimeout(() => {
//   console.log('mid')
// },0)

// console.log('end')

// event loop and callstack =>working of js
// reduce plyfill and depth polyfill
// depth polyfill adn deepclone 2nd method 


//what actually happening behind the scene ,let say there is a call stack manges eecution context and we have task queueMicrotask.call back queand hav event loop that check that if our call stack is empty or not 
// first a Global executon context is created and then line by line code is executing


//  function intro (name){
//     setTimeout(()=>{
//         return `hi I am ${name}`
//     },1000)
//  }
 
//  const result=intro('sadia');
//  console.log(result)


//   function intro(name,callBackFn) {
//     setTimeout(() => {
//       callBackFn(`hi I am ${name}`) 
//     }, 1000)
//   }

//   intro('sadia',(data)=>{
//     console.log(data)
//   })
  //it is taking name and callbackfn it takes dat  and print data and i am passing that in  callback function now  i am able to print my intro 
//   callback is one of the  way handle callback function




// let obj1 = {
//   name: 'prashant',
//   age: 23,
// }


// let obj2 = {
//   qualification: 'BSC CS',
//   loves: 'Javascript',
// }


// // let merge={...obj1,...obj2}
// // console.log(merge)
// // let merge2=Object.assign({},obj1,obj2)
// // console.log(merge2)


// let merge=(...args)=>{


//     let target={}

// let merger=(obj)=>{
//     for(let prop in obj){
//         if(obj.hasOwnProperty(prop)){
//             target[prop]=obj[prop]
//         }
//     }
// }
// for(let i=0;i<args.length;i++){
//     merger(args[i]);
// }
// return target
// }
// let merged = merge(obj1, obj2)

// console.log(merged)


let obj1 = {
  name: 'prashant',
  age: 23,
  nature: {
    helping: true,
    shy: false,
  },
}

let obj2 = {
  qualification: 'BSC CS',
  loves: 'Javascript',
  nature: {
    angry: false,
    shy: true,
  },
}
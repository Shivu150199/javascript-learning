// console.log('start')
// setTimeout(()=>{
//     console.log('mid')
// },500)

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


 function intro (name){
    setTimeout(()=>{
        return `hi I am ${name}`
    },1000)
 }
 
 const result=intro('sadia');
 console.log(result)


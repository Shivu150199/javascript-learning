// let n = prompt('give me number')
// n = parseInt(n)
// while (n % 2 == 0) {
//   document.write(2)
//   n = n / 2
// }

// for (let i = 3; i * i <= n; i = i + 2) {
//   while (n % i == 0) {
//     document.write(`    ${i}`)
//     n = n / i
//   }
// }

// if (n > 2) {
//   document.write(`  ${n}`)
// }

// let random=Math.floor(Math.random()*10)
// console.log(random)

// let num=(min,max)=>{
//     return Math.floor(Math.random() * (max-min)) + ( min + 1)
// }
// let randomNumber=num(54,97)
// console.log(randomNumber)

//linear search

// let array=[43,43,34,34,43,34,65,343,657,24,67,5,766,67,77,53,87564,4,765]
// let n=67

// function searchNum(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==n) return true
//     }
//     return false
// }

// let result=searchNum(array,n)
// console.log(result)

// let result=array.indexOf(n)
// console.log(result)

//NOTE Binary search

// let n = 65

// function binarySearch(arr,n){
//     arr=arr.sort((a,b)=>a-b)
//     // console.log(arr)
//     let lowIndex=0;
//     let highIndex=arr.length-1
// while(lowIndex<=highIndex){
//     let mid=Math.floor(lowIndex+highIndex)/2;
//     // console.log(mid)
//     if(arr[mid]==n){
//         return mid
//     }else if(n>arr[mid]){
//         lowIndex=mid
//     }else{
//         highIndex=mid
//     }
// }
// return -1
// }

// let result=binarySearch(array,n)
// console.log(result)

// let array = [43, 43, 34, 34, 87564, 4, 765]
// let n = array.length

// function swap(i, j) {
// //    let temp=arr[i]
// //    arr[i]=arr[j]
// //    arr[j]=temp
// let temp = i;
// i=j;
// j=temp;
// return {i,j};

// }

// let result=swap(2, 5)

// console.log(result.i,result.j)




// function bubbleSort(arr, n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (arr[i] < arr[j]) {
//         // let temp = arr[i]
//         // arr[i] = arr[j]
//         // arr[j] = temp
//         swap(arr,i,j)
//       }
//     }
//   }
//   return arr
// }

// let result = bubbleSort(array, n)

// console.log(result)

// let a=10
// let b=15

// a=a+b //25
// b=a-b //10
// a=a-b //15



// const btn=document.querySelector('.btn')
// const container=document.querySelector('.toggle-container')

// btn.addEventListener('click',()=>{
//     btn.classList.toggle('toggle')
//     container.classList.toggle('back')

// })


// let num=[2,654,32,5464,34]
// let result=num.sort((a,b)=>a-b)
// console.log(result)

// let obj={
//     ['shivam singh']:'shivam',
//     88:'ashish',
//     78:'uk'
// }
// console.log(obj)


// function changePlaceholder(){
//     //change the placeholder
//     const inputElement=document.getElementById('username')
//     const btn=document.querySelector('.btn')
//     console.log(inputElement.placeholder )
//    if(inputElement.type=='')
    
// }

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// let result=Object.keys(users)
// console.log(result)

// var elems=document.getElementsByClassName('myClass')
// for(var i=0;i<elems.length;i++){
//     elems[i].addEventListener('click',function(){
//         console.log(this.innerHtml)
//     })
// }

// const elem=document.createElement('img')
// elem.src='img.jpg'




// const formElement=document.querySelector('#form')
// const btn=document.querySelector('.btn')

// formElement.addEventListener('submit',(event)=>{
//     console.log('submitted')
//     console.log(event)
// })


// btn.addEventListener('click',(event)=>{
//   console.log(event)  
// })


// let container = document.querySelector('#infi-list')
// let count=0
// for(;count<=10;count++){
//   let div =document.createElement('li')
//   div.innerText = `item ${count}`
//   container.appendChild(div)
// }

// container.addEventListener('scroll',()=>{
//   let scrolledHeight=container.scrollTop
//   console.log(container.scrollHeight)
//   console.log(container.clientHeight)
//   let maxScrollHeight = container.scrollHeight - container.clientHeight
//   if(maxScrollHeight-scrolledHeight<=5){
//     console.log('hello')
//   addTwo()
//   }
// })



// function addTwo(){
//   let div1 = document.createElement('li')
//   div1.innerText = `item ${count++}`
//   container.appendChild(div1)
//   let div2 = document.createElement('li')
//   div2.innerText = `item ${count++}`
//   container.appendChild(div2)
// }


console.log('heelo1')
alert('hello anand')
console.log('hello3')
// const promise=new Promise((resolve,reject)=>{
//     //mimic that promise takes some time

// setTimeout(()=>{
//     resolve({name:'shivam'})
// },2000)


// })
// console.log('initial',promise)

// promise.then((data)=>{
//     console.log('my resolver data is',data)
// })



// const promise = new Promise((resolve, reject) => {
//   //mimic that promise takes some time

//   setTimeout(() => {
//     reject({ message:'sorry not found' })
//   }, 2000)
// })
// console.log('initial', promise)

// promise.then((data) => {
//   console.log('my resolver data is', data)
// }).catch((e)=>{
//     console.log('got error',e)
// })


function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('step1 .....')
            let data={...data,step1:'Boil Water'}
            resolve(data)
        },2000) 
    })
}

function step2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('step2.....')
            data={...data,step2:'put maggi'}
            resolve(data)
        },2000)
    })
}
function step3(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('step3.....')
            data={...data,step2:'maggi ready'}
            resolve(data)
        },2000)
    })
}

step1().then((data1)=>step2(data1)).then((data2)=>step3(data2)).then((data3)=>console.log(data3))




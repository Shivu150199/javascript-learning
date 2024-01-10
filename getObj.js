
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
}
// const get=(obj,path)=>{
//     //if path is not an array or array of string
//     if(path===''||path.length==0) return undefined
// //if path is an array concatenate it and form a string 
// // to handle a single case of string
// if (Array.isArray(path)) path=path.join('.')

// //filter out bracket and dot 
// let exactPath=[]
// for(let i=0;i<path.length;i++){
//     if(path[i]!== '['&&path[i] !==']'&& path[i]!=='.'){
//         exactPath.push(path[i])
//     }
// }

// const value=exactPath.reduce((source,path)=>source[path],obj)

// return value?value:undefined;

// }
let exactPath=['a','b','c']
const value = exactPath.reduce((source, path) => source[path], obj)
console.log(obj['a']['b']['c'])
console.log(value)
// console.log(get(obj, 'a.b.c'))
// console.log(get(obj, 'a.b.c.0'))
// console.log(get(obj, 'a.b.c[1]'))
// console.log(get(obj, ['a', 'b', 'c', '2']))
// console.log(get(obj, 'a.b.c[3]'))
// console.log(get(obj, 'a.c')) 
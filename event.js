/*propagtion mean spread 
spreading can happen in two ways -
1 bubbling -bottom to top
2. trickling - top to bottom 







*/ 

grandParent.addEventListener('click',(e)=>{
    console.log('grand parent clicked')
},true)
parents.addEventListener('click',(e)=>{
    console.log('parent clicked')
} )
grandChild.addEventListener('click',(e)=>{
    console.log('grand child clicked')
},true)
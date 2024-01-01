let products=[
    {
        name:'Comb',
        price:'',
        description:'',
    }
]

const form=document.querySelector('#form');

const container=document.querySelector('.records-container');

const onSubmitForm=(event)=>{
    event.preventDefault()
    const employee = {
      name: event.target.name.value,
      employeeId: event.target.employeeId.value,
      salary: event.target.salary.value,
      role: event.target.role.value,
      companyname: event.target.companyname.value,
      
    }
    console.log(employee)
    addEmployee(employee )
    
}

const addEmployee=(employee)=>{


const record =document.createElement('tr');

for (let key in employee){
const cell=document.createElement('td')
cell.innerText=employee[key]
record.appendChild(cell);          
}
container.appendChild(record)


}


form.addEventListener('submit',onSubmitForm)
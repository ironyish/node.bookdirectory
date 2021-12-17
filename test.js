const emp=[
    {name:"ravi",age:22,start:2014,end:2021},
    {name:"raju",age:23,start:2014,end:2021},
    {name:"ramesh",age:24,start:2014,end:2021},
    {name:"ram",age:25,start:2014,end:2021}
]


emp.forEach(function(employee,index){
    console.log(employee.age);
})



ages=[12,23,13,15,16,18,31,21,22,23]


const age= ages.filter(function(age){
   if (age>23)
   return true
})
console.log(age);


console.log(ages.filter((age)=>(age>44?age:null)));

const dummy=emp.map(function(company,index){
    return `${company.name} ${company.category}`
})
console.log(dummy);
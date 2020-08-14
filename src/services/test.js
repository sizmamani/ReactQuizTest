const customer1 = {
    name: 'sajed',
    last: 'sh',
    getName: ()=>{return 'something'}
}

console.log(customer1.name)


function customer2(){
    this.name = 'sajed'
    this.last = 'sh'
    this.getName = () =>{
        return `${this.name}`
    }
}

const c = new customer2()
console.log(c.name)

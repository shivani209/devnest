

let obj1 = {
    name: "shivani",
    age:22,
    output: function (...y){
        let sum =0
         y.forEach((e)=> sum += e) 
        console.log(`Name = ${this.name} \n Age = ${this.age}\n Sum = ${sum} \ntype of input is array ? :  ${Array.isArray(y)}\n`)
    }
}

let obj2 = {
    name: "balaji",
    age: 30
}

obj1.output(obj2)
obj1.output.call(obj2,1,2,3,4,5)
obj1.output.apply(obj2,[11,52,31,4,15])
let latefun = obj1.output.bind(obj2,11,52,31,4,15)
latefun()

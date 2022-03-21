

interface Person {
    name: string
    age: number
    city: string
}

class Student implements Person {
    name = ""
    age = 0
    city = ""
}

class BusinessPerson implements Person {
    name = ""
    age = 0
    city = ""
    salary = 1000
}

type Car = { 
    brand: string, 
    age: number,
    name: string,
    city: string
}

class Logger<T extends Person = Car> {
    log(items: Array<T>, callback: (i: T) => void) {
        items.forEach((item) => {
            callback(item)
        })
    }
}

export default function play() {

    const logger = new Logger()

    const persons = [{name: "rafael", age: 23, city: "", brand: ""}, {name: "john", age:30, city: "", brand: ""}]
    logger.log(persons, (person) => {
        console.log(person)
    })
    
}
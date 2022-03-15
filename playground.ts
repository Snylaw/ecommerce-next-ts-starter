
// interface Person {
//     name: string
//     age: number
// }

class Person {
    name: string
    age?: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

// interface PersonLoggerFn {
//     (name: string, age: number): string
// }

// OU

type PersonLoggerFn = (name: string, age?: number) => string     // Better for this 

export default function play() {
    const name: string = "Rafael"
    const age: number = 23

    const john: Person = {
        name: "John"
    }

    const logPersonInfo: PersonLoggerFn = (
        personName: string, personAge: number = 0
    ): string => {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    function logPersonInfo2(person: Person) {
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    const log: string = logPersonInfo(name)

    const person = new Person("Rafael", 25)

    logPersonInfo2(person)
}
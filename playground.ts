
interface Person {
    name: string
    age: number
}

// interface PersonLoggerFn {
//     (name: string, age: number): string
// }

// OU

type PersonLoggerFn = (name: string, age: number) => string     // Better for this 

export default function play() {
    const name: string = "Rafael"
    const age: number = 23

    const person: Person = {
        name: "John",
        age: 30
    }

    const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number): string => {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    function logPersonInfo2(person: Person) {
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    const log: string = logPersonInfo(name, age)
    logPersonInfo2(person)
}
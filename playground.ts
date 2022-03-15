
// TS recommend to use Interfaces over Types when possible

// Describe data structures in more natural way
// Describing objects
// Ex: Shipment, Orders ...
interface Person {
    name: string
    age: number
}

// type aliases
// to describe function types
// type Person = {
//     name: string
//     age: number
// }

type Data = string

export default function play() {
    const name: Data = "Rafael"
    const age: number = 23

    const person: Person = {
        name: "John",
        age: 30
    }

    function logPersonInfo(personName: string, personAge: number) {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    function logPersonInfo2(person: Person) {
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    logPersonInfo(name, age)
    logPersonInfo2(person)
}
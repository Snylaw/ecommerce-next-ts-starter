

interface Person {
    kind: "business" | "academic" | "otherType"
    name: string
    age: number
}

interface BusinessPerson extends Person {
    kind: "business"
    salary: number
}

interface AcademicPerson extends Person {
    kind: "academic"
    publications: string[]
}

interface Person {
    prop1: string
    prop2: number
}

type Noop = () => any
type Noop2 = () => void

export default function play() {

    function iterate(items: Array<any>) {
        items.forEach((item) => {
            console.log(item)
        })
    }

    iterate(["rafael", "john", "tom"])
    
}
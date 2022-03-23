
interface Person {
    name: string
}

export default function play() {

    function logger(...args: any[]) {
        return "hello world"
    }

    const kindaLogger: typeof logger = (name: string, age: number) => "Hey Guys!"

    const person = {
        name: "Rafael",
        age: 23
    }

    const person2: typeof person = {
        name: "John",
        age: 30
    }

    kindaLogger("", 23)
    
}
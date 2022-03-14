

export default function play() {
    const name = "Rafael"
    const age = 23

    function logPersonInfo(personName: string, personAge: number) {
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }

    logPersonInfo(name, age)

}
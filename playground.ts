

export default async function play() {
    
    type Greeting = { message: string }

    type InferHelloProps<T> = T extends () => Promise<{props: infer Props}> 
    ? Props
    : never

    const getHelloProps = async function() {
        const greeting = { message: "Hi There!" }

        return {
            props: {
                greeting,
                data: {
                    cars: ["car1", "car2"]
                }
            }
        }
    }    
    
    function sayHello(args: InferHelloProps<typeof getHelloProps>) {
        console.log(args.greeting)
    }

    const data = await getHelloProps()
    sayHello(data.props)

}
import { Container } from "@components/ui"
import { FC } from "react"

const Navbar: FC = () => {

    return (
        <Container>
            <div className="flex flex-row md:py-6">
                <h1>NEXT_STORE</h1>
            </div>
        </Container>
    )
}

export default Navbar
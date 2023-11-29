import { Container } from "react-bootstrap"
import { Menu } from "./Menu"
import { Leftslide } from "./Leftslide"
import { Principal } from "./contenidos/Principal"

export const Diseno = () => {
    return (
        <div className="container-fluid">
            <Menu />
            <div className="container align-items-center">
                <div className="row row-cols-2 p-3 ">
                    <div className="col-4 align-self-start" >
                        <Leftslide></Leftslide>
                    </div>
                    <div className="col-8 align-self-start">
                        <Principal></Principal>
                    </div>
                </div>
            </div>

        </div>
    )
}

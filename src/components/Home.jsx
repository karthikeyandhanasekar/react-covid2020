import React from "react"
import Overall from "./Overall"
import StateWise from "./Statewise"


const Home = () => {



    return (
        <React.Fragment>
            <div className="overall">
                <Overall />
            </div>
            <div className="statewise">
                <StateWise />
            </div>
        </React.Fragment>
    )
}

export default Home
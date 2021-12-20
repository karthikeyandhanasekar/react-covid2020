import React from "react"
import { FetchTimelineData } from "../data/fetchtimeline";

const SearchState = () => {
    const [searchvalue, setsearchvalue] = React.useState()
    const data = FetchTimelineData()

    const search = (e) => {
        e.preventDefault()

        const value = document.forms["searchform"]["search"].value
        const filterstate = data.find(ele => ele.name === value)
        setsearchvalue(filterstate)
    }
    console.log(searchvalue);
    return (

        <React.Fragment>
            <form name="searchform" onSubmit={search}>
                <input list="state" name="search" placeholder="Tamil Nadu" required autoFocus={true} />
                <datalist id="state">
                    {
                        data.map(ele => <option key={ele.name} value={ele.name} />)
                    }
                </datalist>
            </form>
            <div className="displaysearch"></div>
        </React.Fragment>
    )
}

export default SearchState
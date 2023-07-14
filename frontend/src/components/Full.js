import React from 'react'
import Navbar from "../components/NavBar"
const Full = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="bg-light main">
                {children}
            </div>
        </>
    )   
}

export default Full

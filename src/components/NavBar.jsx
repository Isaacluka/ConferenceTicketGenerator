import "../css/NavBar.css"
// import styled from 'styled-components'
import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"
import link from "../assets/Link.svg"


function NavBar(){
    // const Link = styled.a` text-decoration: none;`;
return <nav className="navbar">
        <div>
            <img src= {logo} alt="" />
        </div>
        <div className="nav-links">
            <Link to="/"><h3 className="nav-link"> Events </h3></Link>
            <Link to="/attendeedetails"><h3 className="nav-link"> My Tickets </h3></Link>
            <Link to="/ticketready"><h3 className="nav-link"> About Project </h3></Link>

        </div>
        <img src= {link}/>
    </nav>
}

export default NavBar
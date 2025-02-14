import { useState, useRef } from 'react'
import '../css/selectticket.css'
import { Link } from "react-router-dom"
import { Axios } from "axios";


function SelectTicket(){
    
    const [noOfTickets, setNoOfTickets] = useState("");


    const initialValues = {}
    const [ticketChoice, setTicketChoice] = useState("");

    const ticketRef = useRef(null);

    const handleClick = () => {
        // if (ticketRef.current) {
        //   setTicketChoice(ticketRef.current.innerText);
        //   alert(ticketChoice);
        // }
      };

    return <div className="ticketSelection content">
        <div className="topText">
            <h1>Ticket Selection</h1>
            <p>Step 1/3</p>
        </div>
        
        <div className="innerCard">
            <div className="eventCard">
                <h1 className='road-rage-regular'> Techember Fest "25</h1>
                <p>Join us for an unforgetable experience at 
                <br />
                Techember Fest "25. Secure your spot now.</p>
                <p>📍Eko Hotels and Suites Lagos, Nigeria  || March 15, 2025 | 7:00 PM</p>
            </div>
            <hr />
            <div className="ticketsDiv">
                <p>Select Ticket Type:</p>
                <div className="ticketCards">
                    <div className="ticketCard" ref={ticketRef} onClick={handleClick}>
                        <h2>Free</h2> 
                        <p className='ttype'>REGULAR ACCESS</p>
                        <p>20/52</p>
                    </div>
                    <div className="ticketCard">
                        <h2>$150 </h2>
                        <p className='ttype'>VIP ACCESS</p>
                        <p>20/52</p>
                    </div>
                    <div className="ticketCard">
                        <h2>$150</h2> 
                        <p className='ttype'>VVIP ACCESS</p>
                        <p>20/52</p>
                    </div>
                </div>
            </div>
            <div className=" inputGroup ticketsNo">
                <p>Number of Tickets</p>
                <div className="select-box">
                    <select 
                    id="noOfTickets" 
                    name="noOfTickets" 
                    // defaultValue= "1" 
                    value={noOfTickets}
                    onChange={(e) => setNoOfTickets(e.target.value)}>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="buttons">
                <div className="button cancelBtn">Cancel</div>
                <Link to="/attendeedetails"><div className="button nextBtn">Next</div></Link>
            </div>
        </div>
    </div>
}


export default SelectTicket
import ticket from "../assets/TicketBase.png"

function TicketReady (){
    
    
    return <div className="content">
        <div className="topText">
            <h1>Ready</h1>
            <p>Step 3/3</p>
        </div>
    
        <div className="ticketPageinnerCard innerCard">
            <p>
                <h1>Your Ticket is Booked!</h1>
                <h2>Check your email for a copy or you can <strong>download</strong></h2>
            </p>
            <div className="imageAndButtons">
                <div className="ticketPage imageCard">
                    {/* <h1>Image!</h1> */}
                    <img src={ticket} alt="" srcset=""
                    style={{
                        width: '300px',
                        height: '600px',
                        alignSelf: 'center'
                        
                    }} />
                </div>
                <div className="buttons">
                    <div className="button bookTicket">Book Another Ticket</div>
                    <div className="button ticketDwnld">Download Ticket</div>
                </div>
            </div>
        </div>
    </div>
}

export default TicketReady
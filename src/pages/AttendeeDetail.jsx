import  axios  from "axios";
import { useState } from "react";
// import React from "react";
// import { Image } from "cloudinary-react";

function AttendeeDetails (){
    const [imageSelected, setImageSelected] = useState("");
    
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append("upload_preset", "ConferenceTicketGenerator");

        axios.post("https://api.cloudinary.com/v1_1/dbcxedtzc/image/upload", formData).then((response) => {console.log(JSON.stringify(response).data.secure_url);});
    };

    return <div className="content">
        <div className="topText">
            <h1>Attendee Details</h1>
            <p>Step 2/3</p>
        </div>
    
        <div className="innerCard">
            <div className="imageCard">
                <p>Upload Profile Picture</p>
                <div className="darkSquare">
                    <input type="file" 
                    id="file" 
                    onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                        uploadImage(event.target.files[0]);
                    }}
                    />
                    <label htmlFor="file">
                        <div className="picSquare">
                            {/* <Image cloudName="dbcxedtzc" publicId="https://res.cloudinary.com/dbcxedtzc/image/upload/v1739483747/Flash.png"/> */}
            
                            <p>Drag and drop or click to upload</p>
                        </div>
                    </label>

                </div>
            </div>
            <hr />
            <div className="inputGroup">
                <p>Enter your name</p>
                <input type="text" />
            </div>
            <div className="inputGroup">
                <p>Enter your email*</p>
                <input type="email" placeholder="hello@avioflagos.io"/>
            </div>
            <div className="inputGroup">
                <p>Special request?</p>
                <input type="textarea" placeholder="Textarea"/>
            </div>
            
            <div className="buttons">
                    <div className="button backBtn">Back</div>
                    <div className="button nextBtn">Get My Free Ticket</div>
                </div>
            </div>
    </div>
}

export default AttendeeDetails
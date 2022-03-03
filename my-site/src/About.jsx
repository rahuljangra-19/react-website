import React from "react";
import File from "./File";
import web from "./images/people.jpg";

const About = () =>{
    return(
        <>
         <File 
             name = "We truly appreciate your business "
             message = "We hope to have the pleasure of doing business with you in the future."
        imgsrc = {web}
        visit = "/contact"
        btn = "Contact Now"
         />
        </>
    );
};

export default About;
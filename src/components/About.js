import React from 'react';
import { 
    BrowserRouter as router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function About() {
    return (
        <div classNameName="container">
                <div>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    TextGuru
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextGuru is a simple Text Analyser which can help the users to analyse and manipulate their texts. Functions include Toggling the case of text, Checking the word and character count,finding the time an average user takes to read the text, extracting email ids from the text and copying the text into clipboard.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    About The developer
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>Hi, My Name is Rajath. I am a final year Student in MIT Manipal. I built this project to learn basic functionalities of React. </p>   
                    <a href="https://github.com/rajathnayak2001">Check out some of my other projects</a>
                    </div>
                </div>
                </div>
                
            </div>
                </div>
        </div>
    )
}

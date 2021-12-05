import React,{useState} from 'react'


export default function TextForm(props) {
  
    const [text,setText]=useState('');
    const [email,SetEmail]=useState('');
    
    const handleUpperClick=()=>{
        console.log("button clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const ClearText=()=>{
          setText("");
          SetEmail("");
    }
    function extractemails()
    {
        let xyz=[];
         xyz=text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
         let newText;
         if(Array.isArray(xyz) && xyz.length)
         {
           
            for(let i=0;i<xyz.length;i++)
            {
                newText+=xyz[i];
                newText+=" , ";
            }
            SetEmail(newText);
         }
         else
         {
            SetEmail("No Emails in the above text");
         }
        
         
         
    }
    const copyText =()=>{
        var text2=document.getElementById("preview").textContent;
        //text2.select();
        console.log(text2);
        navigator.clipboard.writeText(text2);
  }
    const handoleOnchange= (event)=>{
      
       
        
        
        console.log("On change");
        setText(event.target.value);
    }
    return (
       <> 
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div class="mb-3">
               
              <textarea class="form-control" value={text} id="box" onChange={handoleOnchange} rows="10"></textarea>
             </div>
             <button class="button mx-2" onClick={handleUpperClick} >Convert To Uppercase</button>
             <button class="button mx-2" onClick={handleLowerClick} >Convert To LowerCase</button>
             <button class="button mx-2" onClick={ClearText} >Clear</button>
             <button class="button mx-2" onClick={extractemails}>Extract Emails</button>
             

        </div>

        <div className="container my-3">
            <h1>Your text Summary</h1>
            <p class="p mx-2">{Math.round(text.split(" ").length)} words and {text.length} characters</p>
            <p class="mx-2">{0.008*(Math.round(text.split(" ").length))} Minutes Read</p>
            <h2>Preview</h2>
            <p id="preview">{text}</p>
            <button class="button " onClick={copyText}>Copy Preview Text to clipboard</button>
            <h3>Emails Extracted</h3>
            <p>{email}</p>
        </div>
        </>
    )
}

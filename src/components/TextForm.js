/*this program for using state function and some handling events in react*/
import React,{useState} from 'react'

export default function TextForm(props) {

    //uppercase function
    const Handelup = ()=>{
        let NewText= Text.toUpperCase();
        setText(NewText)
        props.showAlert("converted to upper case","success");
    }

    //lowercase function
    const Handello = ()=>{
      let NewText= Text.toLowerCase();
      setText(NewText);
      props.showAlert("converted to lower case","success");
    }
    //reverse function
    const Handelrev = ()=>{
      let NewText= Text.split('').reverse().join('');
      setText(NewText);
      props.showAlert("string reversed","success");
    }
    const HandleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    //usestate function
    const[Text,setText]=useState(" ");
    // using text we can not change text
    //we have to use setText foe this
  return (
    //onClick,onChange event handler
    <>
    <div className='container' style={{color:props.Mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        {/* {{}}for making object in js */}
        <textarea className="form-control" id="MyBox" value={Text} rows="8" onChange={HandleOnChange}style={{backgroundColor : props.Mode==='dark'?'grey':'white'  , color: props.Mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={Handelup}>Convert to Upper </button>
        <button className="btn btn-success mx-1" onClick={Handello}>Convert to Lowercase</button>
        <button className="btn btn-danger  mx-1" onClick={Handelrev}>Reverse</button>
        
    </div>
     
    <div className="container my-2"  style={{color:props.Mode==='dark'?'white':'#042743'}}>
      <h2>text summary</h2>
      <p>{Text.split(" ").length}words and {Text.length}characters</p>
      <p>{0.008 * Text.split(" ").length} read words</p>
      <h3>Preview</h3>
      {/* if else to display preview */}
      <p>{Text.length>0?Text:"enter something to preview"}</p>
    </div>
    </>
    // 29 to 33 lines for text summary by displaying length
  )
}

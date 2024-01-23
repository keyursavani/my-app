import React , {useState} from "react"

export default function TextForm(props) {

    const handelUpClick = ()=>{
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase","success")
    }

    
    const handelLoClick = ()=>{
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase","success")
    }

    const handelClearClick = ()=>{
        // console.log(text);
        let newText = '';
        setText(newText)
        props.showAlert("clear text","success")
    }

    const handelOnChange = (event)=>{
        // console.log(text);
        setText(event.target.value)
    }

    const handelCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy text","success")
    }

    const handelExtraSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space","success")
    }

    const [text , setText] = useState("Enter the text here");

    // text = "new text" // Wrong way to chnage the state
    // setText("New Text"); //Correct way to chnage the state
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear the text</button>
            <button className="btn btn-primary mx-2" onClick={handelCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handelExtraSpaceClick}>Handel Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Word and {text.length} Charecters</p>
            <p>{0.008 * text.split(" ").length} Minuts to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in above textfield"}</p>
        </div>
        </>
    )
}
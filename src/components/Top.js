import './Top.css'

export default function Top(props) {
    
    const  {nameTitle, addName, nameText, addText} = props
    
    
    return (
        
    <h1 className="headline,subHeadline"> {nameTitle},{addName},{nameText},{addText}</h1>
    )
  };
import '../App.css'

export default function Top(props) {
    
    const  {nameTitle, addTitle, addText, addName} = props
    
    
    return (
        
      <section>
      <h2 className="headline">{ addTitle }{ nameTitle }</h2>
      <p className='subHeadline'> { addText }{ addName }</p>
  </section>
    )
  };
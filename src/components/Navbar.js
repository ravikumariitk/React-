import React, {useState} from 'react'
export default function Navbar() {
  const[text,update]=useState("");
  const[modename,updatename]=useState("enable dark mode");
  const [Alert, setAlert] = useState("")
  const showaslert=(msg)=>{
    setAlert(msg) 
   }
  const[theme,changetheme]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const copy=()=>{
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const change=(event)=>{
    update(event.target.value);
  }
  const upper=()=>{
    update(text.toUpperCase())
    setAlert("Sucess");
  }
  const lower=()=>{
    update(text.toLowerCase())
  }
  const trim=()=>{
    update(text.trim())
  }
  const fun=()=>
  { 
    update('');
  }
  const mode=()=>
  {
    if(theme.backgroundColor=='black')
    {
    changetheme({
      color:'white',
    backgroundColor:'black'
    })
    updatename("enable light mode")
    const nav=document.getElementById("nav")
    nav.style.backgroundColor="black"
  }
    else
    {
     changetheme( {
        color:'black',
        backgroundColor:'white'
      })
      updatename("enable dark mode")
      let nav=document.getElementById('nav')
      nav.style.backgroundColor='white'
    }
  }
  return (
    <>
    <nav id='nav' className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid" style={theme} >
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <button type="button" onClick={mode} class="btn btn-outline-primary">{modename}</button>
    </div>
  </div>
</nav>
<div className="container" >
  <h1>Analyze your text here</h1>
  <textarea name="" id="" cols="100" rows="10" onChange={change} value={text}></textarea><br/>
  <button type="button" className="btn btn-outline-primary" onClick={upper}>Change to upper</button>
<button type="button" className="btn btn-outline-secondary" onClick={lower}>Change to lower</button>
<button type="button" className="btn btn-outline-success" onClick={trim}>Delete all terminal space</button>
<button type="button" className="btn btn-outline-success" onClick={fun}>clear text</button>
</div>
<div className='container'>
  <h1>Text Summary</h1>
  <p>Text has {text.length} character<br/>Text has {text.split(' ').length} words</p>
</div>
    </>
  )
}

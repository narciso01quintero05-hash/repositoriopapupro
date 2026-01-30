import { useState} from "react";
import editor from "./components/editor"
import Preview from "./components/Preview"

import './App.css';

function App(){
  const [text, setText ] = useState("# Hola\n\Empieza a escribir");

  return(
    <div style={{display: "flex", height: "100vh"}}>
      
      <div style={{width: "20%", background: "#eee"}}> 

          Post-its (luego)
          </div>

          <div style={{ widht: "40%"}}>

              <editor value={text } onChange={setText}/>
          </div>

          <div style={{widht: " 40%"}}>
            <Preview content ={text}  />
          </div>


    
    </div>
  );



}

export default App;


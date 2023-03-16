import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Configuration , OpenAIApi} from "openai"


function App() {

  const [prompt , setPrompt] = useState("")
  const [result , setResult] = useState("")

  const configuration = new Configuration({
    apiKey:"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"

  })
  
  const openai = new OpenAIApi(configuration);
  const genrateImage = async() =>{
    const res = await openai.createImage({
      prompt: prompt , 
      n: 1,
      size: "512x512"
      //prompt
      //n 1 - 10
      //size 1024 x 1024 default $0.02
      //respose_format
      //user
    })
    
    setResult(res.data.data[0].url);
    //console.log(res);
  }

  console.log(prompt)
  return (
    <div className="App">
      <h2>genrate image</h2>
      <br/>
      <textarea
       placeholder='lets genrate image'
       onChange={(e) => setPrompt(e.target.value)} 
       />

      <img src={logo} className="App-logo" alt="logo" />
        
      <br/>
      <button onClick ={genrateImage}>genrateimage</button>
      <hr/>
      
      <img src = {result} alt  = {result} />
    
      
        
    </div>
  );
}

export default App;

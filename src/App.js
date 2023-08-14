
import React from 'react'
import './App.css'
import { Profile, Education, Skills} from './components'

function App() {
  return ( <center class="whole" >
    <div >

    <div class="myPic">
    <img src={'/picture/me.jpg'} alt="Logo" class="center hover:scale-20"  />
    </div>
    <h1 style={{ color: "Teal" }}>Welcome</h1>

    <div class="myProfile">
      <Profile />
    </div>

    <div class = "ES">
      <Education />
      <Skills />
    </div>
    <div>
      
    </div>
  </div>
  </center>
  )
};
export default App;
//<h1 style={{ color: "red", textAlign: "center" }}>Welcome</h1>
// <Skills/>
// <div class = "ES">
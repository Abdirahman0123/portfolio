import './App.css'
import { Profile, Education, Skills, /*Picture*/ } from './components'

function App() {
  return (<div style={{ textAlign:"center"}} >

    
    <img src={'/picture/me.jpg'} alt="Logo" class="center"/>
    

    <h1 style={{color: "red", textAlign:"center"}}>Welcome</h1>

    

    <div>
      
      <pro>
      <Profile />
      </pro>
    </div>

    <div >
      
      <Education  />
    </div>

    <div>
      <h4> Skills </h4>
      <Skills/>
    </div>

  </div>
  )
};
export default App;

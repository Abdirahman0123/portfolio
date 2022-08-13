import './App.css'
import { Profile, Education, Skills, /*Picture*/ } from './components'

function App() {
  return (<div >

    
    <img src={'/picture/me.jpg'} alt="Logo" />
    

    <h1 style={{color: "red"}}>Welcome</h1>

    

    <div>
      <h4> Profile </h4>
      <Profile />
    </div>

    <div>
      <h4> Education </h4>
      <Education />
    </div>

    <div>
      <h4> Skills </h4>
      <Skills/>
    </div>

  </div>
  )
};
export default App;

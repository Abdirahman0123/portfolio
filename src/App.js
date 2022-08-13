import './App.css'
import { Profile, Education, Skills, /*Picture*/ } from './components'

function App() {
  return (<div style={{ textAlign: "center" }} >


    <img src={'/picture/me.jpg'} alt="Logo" class="center" />


    <h1 style={{ color: "red", textAlign: "center" }}>Welcome</h1>

    <div>
      <Profile />
    </div>

    <div >
      <Education />
    </div>

    <div>
      <Skills />
    </div>

  </div>
  )
};
export default App;

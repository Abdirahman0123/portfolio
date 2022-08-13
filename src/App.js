import './App.css'
import { Header , Profile, Education } from './components'
//import { } from './components'
//import { Education } from './components'


function App() {
  return (<div >
        <h1> Hi </h1>

    <div>
      <Header />
    </div>

    <div>
    <h4> Profile </h4>
      <Profile />
    </div>

    <div>
      <h4> Education </h4>
      <Education/>
    </div>

  </div>
  )
};
export default App;

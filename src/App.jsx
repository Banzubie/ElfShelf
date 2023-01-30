import { useState } from 'react'
import {Link} from "react-router-dom";
import Home from './components/Home'
import Gifts from './components/Gifts'
import RequestInfo from './components/RequestInfo'
import SignUp from './components/SignUp'
import HowItWorks from './components/HowItWorks'
import './App.css'

function App() {
  const [page, setPage] = useState('Home');
  const [requested, setRequested] = useState('form');

  const navClick = (e) => {
    e.preventDefault();
    setPage(e.target.innerText);
  }

  return (
    <div className="App">
      <div className='logo'>
        <img src='src/assets/elfshelflogo.jpg' style={{height: '153px'}}/>
        <img src='src/assets/ElfPointLeft.jpeg' style={{position: 'relative' , top: '30px',height: '153px'}}/>
      </div>
      <div className='navBar'><p><button onClick={navClick}>Home</button> | <button onClick={navClick}>How It Works</button> | <button onClick={navClick}>Gifts</button> | <button onClick={navClick}>Request Information</button> | <button onClick={navClick}>Sign Up Today</button></p></div>
      <div style={{margin: '5%'}}>
        {page === 'Home' ? <Home /> : null}
        {page === 'How It Works' ? <HowItWorks /> : null}
        {page === 'Gifts' ? <Gifts /> : null}
        {page === 'Request Information' ? <RequestInfo requested={requested} setRequested={setRequested}/> : null}
        {page === 'Sign Up Today' ? <SignUp requested={requested} setRequested={setRequested}/> : null}
      </div>
      <p className='Info'>For Questions and Information{<br/>}
      Call 1-877-384-9653{<br/>}
      Email info@elfshelfholidayshop.com{<br/>}
      <p style={{fontSize: '10px'}}>Website by Brian Vose <a href="https://github.com/Banzubie" target="_blank">
          Github
        </a> <a href="https://www.linkedin.com/in/brvose/" target="_blank">
          LinkedIn
        </a></p></p>
    </div>
  )
}

export default App

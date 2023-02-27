import { useState } from 'react'
import { Link } from "react-router-dom";
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

  console.log('Hello fellow developer! I\'d love to hear what you think of the site. Feel free to reach out to me at the links on the bottom of the page.')

  return (
    <div className="App">
      <div className='logo'>
        <img src='src/assets/elfshelflogo.jpg' alt='The Elf Shelf logo' />
        <img src='src/assets/ElfPointLeft.jpeg' style={{ position: 'relative', top: '30px', height: '153px' }} alt='elf pointing with index finger to the logo' />
      </div>
      <div className='navBar'><p><button onClick={navClick}>Home</button><button onClick={navClick}>How It Works</button><button onClick={navClick}>Gifts</button><button onClick={navClick}>Request Information</button><button onClick={navClick}>Sign Up Today</button></p></div>
      <div style={{ margin: '-1em 5em' }}>
        {page === 'Home' ? <Home /> : null}
        {page === 'How It Works' ? <HowItWorks /> : null}
        {page === 'Gifts' ? <Gifts /> : null}
        {page === 'Request Information' ? <RequestInfo requested={requested} setRequested={setRequested} /> : null}
        {page === 'Sign Up Today' ? <SignUp requested={requested} setRequested={setRequested} /> : null}
      </div>
      <p className='Info'><span style={{ fontSize: '10px', fontStyle: 'italic' }}>The Elf Shelf<span className="sup">&reg;</span> Holiday Shop is brought to you by SchoolPals, LLC</span>{<br />}
        For Questions and Information{<br />}
        Call <a href='tel:18773849653'>1-877-384-9653</a>{<br />}
        Email <a href='mailto:info@elfshelfholidayshop.com'>info@elfshelfholidayshop.com</a>{<br />}
        <span style={{ fontSize: '10px' }}>Website by Brian Vose <a href="https://github.com/Banzubie" target="_blank">
          Github
        </a> <a href="https://www.linkedin.com/in/brvose/" target="_blank">
            LinkedIn
          </a></span></p>
    </div>
  )
}

export default App

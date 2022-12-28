import { useState } from 'react'
import Home from './components/Home'
import Gifts from './components/Gifts'
import RequestInfo from './components/RequestInfo'
import SignUp from './components/SignUp'
import HowItWorks from './components/HowItWorks'
import './App.css'

function App() {

  const [page, setPage] = useState('Home');

  const navClick = (e) => {
    e.preventDefault();
    setPage(e.target.innerText);
  }

  return (

    <div className="App">
      <img src='http://natalieselfshelf.com/images/elf%20shelf%20logo%2089.png?crc=3903930728' className='Logo'/>
      <div className='navBar'><p><button onClick={navClick}>Home</button> | <button onClick={navClick}>How It Works</button> | <button onClick={navClick}>Gifts</button> | <button onClick={navClick}>Request Information</button> | <button onClick={navClick}>Sign Up Today</button></p></div>
        {page === 'Home' ? <Home /> : null}
        {page === 'How It Works' ? <HowItWorks /> : null}
        {page === 'Gifts' ? <Gifts /> : null}
        {page === 'Request Information' ? <RequestInfo /> : null}
        {page === 'Sign Up Today' ? <SignUp /> : null}
      <p className='Info'>For Questions and Information{<br/>}
      Call 1-877-384-9653{<br/>}
      Email info@elfshelfholidayshop.com</p>
    </div>
  )
}

export default App

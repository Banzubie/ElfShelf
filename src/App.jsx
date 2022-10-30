import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>

    <div className="App">
    <img src='http://natalieselfshelf.com/images/elf%20shelf%20logo%2089.png?crc=3903930728' className='Logo'/>
    <p className='Info'>For Questions and Information{<br/>}
Call 1-877-384-9653{<br/>}
Email info@elfshelfholidayshop.com</p>
      <div>
      <div className='navBar'><p>Home | How It Works | Gifts | Request Information | Sign Up Today</p></div>
        <h2>Elf Shelf® Holiday Shop In-School Gift Shoppe Program</h2>
        <p>Elf Shelf® Holiday Shop is a temporary, in-school gift shop program designed for Elementary and Middle School PTA/PTO/Parent groups that want to bring a free, fun and educational service project to their school.</p>
        <div style={{float: 'left', marginLeft: '50px'}}>
          <p>100% Consignment</p>
          <p>Most Gifts $7 and Less</p>
          <p>No Inventory Required</p>
          <p>Free Gift Wrap Supplies</p>
          <p>Free Promotional Kit</p>
          <p>Price-Programmed Cash Register</p>
          <p>Sign up Promotions</p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ETso1d7SqrU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <br />
      <h3>Gifts are tested and kid-priced for Mom, Dad, Grandma, Grandpa and friends.{<br/>}
Everything is sent on consignment, so there is no prepayment required – we even pay the shipping!{<br/>}
We make it easy for you to have a holiday shop at your school.</h3>
    </div>
    </div>
  )
}

export default App

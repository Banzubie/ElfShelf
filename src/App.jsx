import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <img src='http://natalieselfshelf.com/images/elf%20shelf%20logo%2089.png?crc=3903930728' />
      <br />
      <div className='navBar'><p>Home | About Us | What It Is | How It Works | What You Get | Gifts | Promotions | Sign Up Today</p></div>
      <br />
      <div>
        <h2>Elf Shelf® Holiday Shop In-School Gift Shoppe Program</h2>
        <p>Elf Shelf® Holiday Shop is a temporary, in-school gift shop program designed for Elementary and Middle School PTA/PTO/Parent groups that want to bring a free, fun and educational service project to their school.</p>
        <ul style={{float: 'left'}}>
          <li>100% Consignment</li>
          <li>Most Gifts $7 and Less</li>
          <li>No Inventory Required</li>
          <li>Free Gift Wrap Supplies</li>
          <li>Free Promotional Kit</li>
          <li>Free use of Price-Programmed Cash Register</li>
          <li>Sign up Promotions</li>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ETso1d7SqrU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <br />
      <h3>Gifts are tested and kid-priced for Mom, Dad, Grandma, Grandpa and friends.{<br/>}
Everything is sent on consignment, so there is no prepayment required – we even pay the shipping!{<br/>}
We make it easy for you to have a holiday shop at your school.</h3>
      <p>For Questions and Information{<br/>}
Call 1-877-384-9653{<br/>}
Email info@elfshelfholidayshop.com</p>
    </div>
  )
}

export default App

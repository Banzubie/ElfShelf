import { useState } from 'react'
import axios from 'axios'

function RequestInfo ({ requested, setRequested }) {

  const sumbitInfo = (e) => {
    e.preventDefault();
    setRequested('sending');
    axios.post('/requestInfo', {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      school: e.target.school.value,
      city: e.target.city.value || 'N/A',
      state: e.target.state.value || 'N/A',
      zip: e.target.zip.value || 'N/A',
      studentCount: e.target.studentCount.value,
      runShop: e.target.runShop.value,
      contact: e.target.contact.value || 'N/A',
      comments: e.target.comments.value || 'N/A'
    }).then(res => {
      console.log(res.data)
      setRequested('sent')
    }).catch(err => {
      console.log(err)
      setRequested('fail')
    })
  }

  if (requested === 'form') {
    return (
      <div>
        <form onSubmit={sumbitInfo}>
          <label htmlFor='firstName'>First Name*: </label>
          <input type='text' id='firstName' required></input>
          <br/>
          <label htmlFor='lastName'>Last Name*: </label>
          <input type='text' id='lastName' required></input>
          <br/>
          <label htmlFor='email'>Email*: </label>
          <input type='email' id='email' name='email' required></input>
          <br/>
          <label htmlFor='phone'>Phone*: </label>
          <input type='tel' id='phone' name='phone' required></input>
          <br/>
          <label htmlFor='school'>School Name*: </label>
          <input type='text' id='school' name='school' required></input>
          <br/>
          <label htmlFor='city'>City: </label>
          <input type='text' id='city' name='city' required></input>
          <br/>
          <label htmlFor="state" required> State: </label>
          <select id="state" name="state" style={{width: '45px'}}>
            <option value="---">---</option>
            <option value="Alabama">AL</option>
            <option value="Alaska">AK</option>
            <option value="Arizona">AZ</option>
            <option value="Arkansas">AR</option>
            <option value="California">CA</option>
            <option value="Colorado">CO</option>
            <option value="Connecticut">CT</option>
            <option value="Delaware">DE</option>
            <option value="District of Columbia">DC</option>
            <option value="Florida">FL</option>
            <option value="Georgia">GA</option>
            <option value="Guam">GU</option>
            <option value="Hawaii">HI</option>
            <option value="Idaho">ID</option>
            <option value="Illinois">IL</option>
            <option value="Indiana">IN</option>
            <option value="Iowa">IA</option>
            <option value="Kansas">KS</option>
            <option value="Kentucky">KY</option>
            <option value="Louisiana">LA</option>
            <option value="Maine">ME</option>
            <option value="Maryland">MD</option>
            <option value="Massachusetts">MA</option>
            <option value="Michigan">MI</option>
            <option value="Minnesota">MN</option>
            <option value="Mississippi">MS</option>
            <option value="Missouri">MO</option>
            <option value="Montana">MT</option>
            <option value="Nebraska">NE</option>
            <option value="Nevada">NV</option>
            <option value="New Hampshire">NH</option>
            <option value="New Jersey">NJ</option>
            <option value="New Mexico">NM</option>
            <option value="New York">NY</option>
            <option value="North Carolina">NC</option>
            <option value="North Dakota">ND</option>
            <option value="Northern Marianas Islands">MP</option>
            <option value="Ohio">OH</option>
            <option value="Oklahoma">OK</option>
            <option value="Oregon">OR</option>
            <option value="Pennsylvania">PA</option>
            <option value="Puerto Rico">PR</option>
            <option value="Rhode Island">RI</option>
            <option value="South Carolina">SC</option>
            <option value="South Dakota">SD</option>
            <option value="Tennessee">TN</option>
            <option value="Texas">TX</option>
            <option value="Utah">UT</option>
            <option value="Vermont">VT</option>
            <option value="Virginia">VA</option>
            <option value="Virgin Islands">VI</option>
            <option value="Washington">WA</option>
            <option value="West Virginia">WV</option>
            <option value="Wisconsin">WI</option>
            <option value="Wyoming">WY</option>
          </select>
          <br/>
          <label htmlFor='zip'>Zip: </label>
          <input type='text' id='zip' required></input>
          <br/>
          <label htmlFor='studentCount'>Number of students*: </label>
          <input type='number' id='studentCount' required></input>
          <br/>
          <label>Did you run a shop in the last 3 years?*:</label>
          <input type='radio' id='runShopYes' name='runShop' value='yes' required></input>
          <label htmlFor='runShopYes'>Yes</label>
          <input type='radio' id='runShopNo' name='runShop' value='no' required></input>
          <label htmlFor='runShopNo'>No</label>
          <br/>
          <label>Preferred contact method:</label>
          <input type='radio' id='contactEmail' name='contact' value='email'></input>
          <label htmlFor='contactEmail'>Email</label>
          <input type='radio' id='contactPhone' name='contact' value='phone'></input>
          <label htmlFor='contactPhone'>Phone</label>
          <input type='radio' id='contactText' name='contact' value='text'></input>
          <label htmlFor='contactText'>Text</label>
          <br/>
          <label htmlFor='comments'>Additional questions/comments:</label>
          <br/>
          <textarea id='comments' name='comments'></textarea>
          <br/>
          <input type='submit' value='Request Information'></input>
        </form>
      </div>
    )
  } else if (requested === 'sent') {
    return (
      <div>
        <p>Thank you for your interest! </p>
        <p>A representative will be in contact with you shortly!</p>
        <img src='src/assets/ELF WITH GIFT Small.jpeg' className='WorksElfPic'></img>
      </div>
    )
  } else if (requested === 'sending') {
    return (
      <div>
        <h3>Sending...</h3>
      </div>
    )
  } else {
    return (
      <div>
        <p>Oh no! Something has gone wrong!</p>
        <p>Please refresh the page and try again.</p>
      </div>
    )
  }
}

export default RequestInfo
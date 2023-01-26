import { useState } from 'react'

function SignUp ({ requested, setRequested }) {

  const [runSchool, setRunSchool] = useState(false);

  const sumbitInfo = (e) => {
    e.preventDefault();
    console.log(e.target)
    // setRequested('sending');
    // axios.post('/signUp', {
    //   firstName: e.target.firstName.value,
    //   lastName: e.target.lastName.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   school: e.target.school.value,
    //   city: e.target.city.value || 'N/A',
    //   state: e.target.state.value || 'N/A',
    //   zip: e.target.zip.value || 'N/A',
    //   studentCount: e.target.studentCount.value,
    //   runShop: e.target.runShop.value,
    //   contact: e.target.contact.value || 'N/A',
    //   comments: e.target.comments.value || 'N/A'
    // }).then(res => {
    //   console.log(res.data)
    //   setRequested('sent')
    // }).catch(err => {
    //   console.log(err)
    //   setRequested('fail')
    // })
  }

  if (requested === 'form') {
    return (
      <div>
        <form onSubmit={sumbitInfo}>
          <label htmlFor='school'>School Name: </label>
          <input type='text' id='school' name='school' required></input>
          <br/>
          <label htmlFor='group'>Group Name: </label>
          <input type='text' id='group' name='group' required></input>
          <br/>
          <label htmlFor='chairperson'>Chairperson: </label>
          <input type='text' id='chairperson' required></input>
          <br/>
          <label htmlFor='phone'>Phone: </label>
          <input type='tel' id='phone' name='phone' required></input>
          <br/>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' name='email' required></input>
          <br/>
          <label htmlFor='secondPhone'>Secondary Phone: </label>
          <input type='tel' id='secondPhone' name='secondPhone' required></input>
          <br/>
          <label htmlFor='schoolphone'>School Phone: </label>
          <input type='tel' id='schoolphone' name='schoolphone' required></input>
          <br/>
          <label htmlFor='fax'>Fax Number: </label>
          <input type='tel' id='fax' name='fax' required></input>
          <br/>
          <label htmlFor='billing'>Billing Address: </label>
          <input type='text' id='billing' required></input>
          <br/>
          <label htmlFor='billcity'>City: </label>
          <input type='text' id='billcity' name='billcity' required></input>
          <br/>
          <label htmlFor="billstate"> State: </label>
          <select id="billstate" name="billstate" style={{width: '45px'}} required>
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
          <label htmlFor='billzip'>Zip: </label>
          <input type='text' id='billzip' required></input>
          <br/>
          <label htmlFor='shipping'>Shipping Address: </label>
          <input type='text' id='shipping' required></input>
          <br/>
          <label htmlFor='shipcity'>City: </label>
          <input type='text' id='shipcity' name='shipcity' required></input>
          <br/>
          <label htmlFor="shipstate"> State: </label>
          <select id="shipstate" name="shipstate" style={{width: '45px'}} required>
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
          <label htmlFor='shipzip'>Zip: </label>
          <input type='text' id='shipzip' required></input>
          <br/>
          <label htmlFor='presidentName'>President's Name: </label>
          <input type='text' id='presidentName' required></input>
          <br/>
          <label htmlFor='presidentphone'>President's Phone: </label>
          <input type='tel' id='presidentphone' name='presidentphone' required></input>
          <br/>
          <label htmlFor='treasureNamer'>Treasurer Name: </label>
          <input type='text' id='treasurerName' required></input>
          <br/>
          <label htmlFor='treasurerPhone'>Treasurer Phone: </label>
          <input type='tel' id='treasurerPhone' name='treasurerPhone' required></input>
          <br/>
          <label>Did you run a holidy shop last year?:</label>
          <input type='radio' id='runShopYes' name='runShop' value='yes' onClick={() => {setRunSchool(true)}} required></input>
          <label htmlFor='runShopYes'>Yes</label>
          <input type='radio' id='runShopNo' name='runShop' value='no' onClick={() => {setRunSchool(false)}} required></input>
          <label htmlFor='runShopNo'>No</label>
          <br/>
          {!runSchool ? null :
          <div>
            <label htmlFor='yesSchoolName'>With whom?: </label>
            <input type='text' id='yesSchoolName' required></input>
            <br/>
            <label htmlFor='yesSchoolSales'>Sales: $</label>
            <input type='number' id='yesSchoolSales' required></input>
            <br/>
            <label htmlFor='yesSchoolStartDate'>Start Date: </label>
            <input type='date' id='yesSchoolStartDate' required></input>
            <br/>
            <label htmlFor='yesSchoolEndDate'>End Date: </label>
            <input type='date' id='yesSchoolEndDate' required></input>
            <br/>
            <label htmlFor='yesSchoolStudentCount'>Number of students: </label>
            <input type='number' id='yesSchoolStudentCount' required></input>
            <br/>
          </div>
          }
          <label>A price-programmed cash register will be provided when requested.:</label>
          <br/>
          <input type='radio' id='registerYes' name='register' value='registeryes' required></input>
          <label htmlFor='registerYes'>Yes, send a register</label>
          <br/>
          <input type='radio' id='registerNo' name='register' value='no' required></input>
          <label htmlFor='registerNo'>No, we do not need a register</label>
          <br/>
          <label>We want to earn</label>
          <input type='radio' id='earn0%' name='earn' value='0%'></input>
          <label htmlFor='earn0%'>0%</label>
          <input type='radio' id='earn10%' name='earn' value='10%'></input>
          <label htmlFor='earn10%'>10%</label>
          <input type='radio' id='earn20%' name='earn' value='20%'></input>
          <label htmlFor='earn20%'>20%</label>
          <span> profit on our sales</span>
          <br/>
          <label htmlFor='merchandise'>Please send us approximately $ </label>
          <input type='number' id='merchandise'></input>
          <span> in merchandise.*</span>
          <br/>
          <span style={{fontSize: 'xx-small'}}>(*First time shops leave blank. Minimum sent is typically $2500 worth.)</span>
          <br/>
          <input type='submit' value='Sign up'></input>
        </form>
      </div>
    )
  } else if (requested === 'sent') {
    return (
      <div>
        <p>Thank you for signing up! </p>
        <p>A representative will be in contact with you shortly to confirm your order!</p>
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

export default SignUp
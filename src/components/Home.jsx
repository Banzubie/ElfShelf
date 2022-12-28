import { useState } from 'react'

function Home () {
  return (
    <div>
      <p>Elf Shelf® Holiday Shop is a temporary, in-school gift shop program designed for Elementary and Middle School PTA/PTO/Parent groups that want to bring a free, fun and educational service project to their school.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ETso1d7SqrU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <h3>Gifts are tested and kid-priced for Mom, Dad, Grandma, Grandpa and friends.{<br/>}
  Everything is sent on consignment, so there is no prepayment required – we even pay the shipping!{<br/>}
  We make it easy for you to have a holiday shop at your school.</h3>
      <table>
        <tbody>
          <tr>
            <td>100% Consignment</td>
            <td>Free Gift Wrap Supplies</td>
          </tr>
          <tr>
            <td>Most Gifts $7 and Less</td>
            <td>Free Promotional Kit</td>
          </tr>
          <tr>
            <td>No Inventory Required</td>
            <td>Price-Programmed Cash Register</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
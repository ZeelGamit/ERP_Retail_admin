import React, { useState } from 'react'
import Select from 'react-select';
import "../Revenue/Revenue.scss"
import { FaRupeeSign } from "react-icons/fa"

export const Revenue = () => {
  const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  return (
    <div className='card'>
      <div className="card-body mx-auto my-auto revenueCard">
        <div className= "d-flex justify-content-between align-items-center mt-3">
          <div class=' revenuetxt'><h5>Total Revenue:<FaRupeeSign size = {17} className="mx-3"/>510000</h5></div>
        <div>
          <Select
            placeholder="Select Option"
            value={selectedOption} // set selected value
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
          />

          {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            <b>Selected Option</b><br />
            <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
            <div><b>Value: </b> {selectedOption.value}</div>
          </div>}
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Bussiness Name</th>
            <th scope="col">Account manager</th>
            <th scope="col">Validity</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>06/07/2021</td>
            <td>Earn name</td>
            <td>Account Manager</td>
            <td>300 days</td>
            <td><FaRupeeSign />10000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>31/07/2021</td>
            <td>Compost</td>
            <td>Account Manager1</td>
            <td>100 days</td>
            <td><FaRupeeSign />200000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>24/12/2021</td>
            <td>Abc store</td>
            <td>Maitrayee</td>
            <td>000 days</td>
            <td><FaRupeeSign />300000</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Revenue
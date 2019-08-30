import React from 'react'

const Cities = ({ cities }) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {cities.map((cities) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{cities.status}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Cities
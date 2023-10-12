import React from 'react';

function Tables() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan="3" className="thank-you-note">
           Thank you for voting!
          </th>
        </tr>
        <tr>
          <th scope="col">Voter Name</th>
          <th scope="col">Time of Vote</th>
          <th scope="col">Vote Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>12.00am</td>
          <td>
            <i className="fa-regular fa-circle-check fa-xl"></i>
          </td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>9.45am</td>
          <td>
            <i className="fa-regular fa-circle-check fa-xl"></i>
          </td>
        </tr>
        <tr>
          <td>Susan</td>
          <td>9.00am</td>
          <td>
            <i className="fa-regular fa-circle-check fa-xl"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tables;

import React from 'react';

function Tables({ userName, time, status }) {
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
          <td>{userName}</td>
          <td>{time}</td>
          <td>
            {status ? (
              <i className="fa-regular fa-circle-check fa-xl"></i>
            ) : (
              <i className="fa-regular fa-circle-times fa-xl"></i>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tables;

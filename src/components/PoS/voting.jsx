import React from "react";
import "./voting.css";

import VoteMachine from "./VoteMachine";

const Voting = (props) => {
  // React.useEffect(()=>{
  //     const test=document.getElementsByClassName('voting_machine')
  //     test.addEventListener('click',()=>{
  //         console.log('clicked')
  //     })

  // },[])

  return (
    <div>
      <VoteMachine/>

      <div className='next-button'>
          <button type="button" style={{margin:"10%"}} className="btn btn-outline-light details-btn" onClick={props.onCounting}>next</button>

          </div>
        
    </div>
  );
};

export default Voting;

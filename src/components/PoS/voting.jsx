import React from "react";
import "./voting.css";

import VoterMachine from "../common/VotingMachine";
const Voting = () => {
  // React.useEffect(()=>{
  //     const test=document.getElementsByClassName('voting_machine')
  //     test.addEventListener('click',()=>{
  //         console.log('clicked')
  //     })

  // },[])

  return (
    <div>
      <VoterMachine />
    </div>
  );
};

export default Voting;

import React from 'react'
import './voting.css'

import VoterMachine from '../Common/VotingMachine';
const Voting = (props) => {
// React.useEffect(()=>{
//     const test=document.getElementsByClassName('voting_machine')
//     test.addEventListener('click',()=>{
//         console.log('clicked')
//     })

  // },[])

    return (
        <> 
        <div>
<VoterMachine  />

<button onClick={props.onCounting}></button>
        </div>

        </>
    );
}

export default Voting;

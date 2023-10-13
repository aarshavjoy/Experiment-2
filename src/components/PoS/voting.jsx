import React from 'react'
import './voting.css'
import Voting_machine from './images/layer2.svg'
import VoterMachine from '../common/VotingMachine';
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
}

export default Voting;

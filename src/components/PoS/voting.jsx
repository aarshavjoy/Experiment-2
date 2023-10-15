import React from 'react'
import './voting.css'
import Voting_machine from './images/layer2.svg'
import VoterMachine from '../common/VotingMachine';
const Voting = ({setShowCaptcha,setCaptcha}) => {
// React.useEffect(()=>{
//     const test=document.getElementsByClassName('voting_machine')
//     test.addEventListener('click',()=>{
//         console.log('clicked')
//     })

// },[])

    return (
        <div>
<VoterMachine setShowCaptcha={setShowCaptcha} setCaptcha={setCaptcha} />
        </div>
    );
}

export default Voting;

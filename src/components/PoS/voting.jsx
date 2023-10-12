import React from 'react'
import './voting.css'
import Voting_machine from './images/layer2.svg'
const Voting = () => {
// React.useEffect(()=>{
//     const test=document.getElementsByClassName('voting_machine')
//     test.addEventListener('click',()=>{
//         console.log('clicked')
//     })

// },[])

    return (
        <div>
<img className='voting_machine' src={Voting_machine} alt="" />
        </div>
    );
}

export default Voting;

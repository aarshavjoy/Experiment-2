import React from 'react';
import PosComponent from '../PosComponent';
import PowComponent from '../PowComponent';
import Divider from '../../Divider';

const MainContainer = () => {
    const [showPoW, setShowPow] = React.useState(true)
    const onHandleChange = ()=>[
        setShowPow()
    ]
    return (
        <div>
          

            {/* switch */}

            <div>
            <button>Pow</button>
            <button>Pos</button>
            </div>
            {showPoW ? <PowComponent /> : <PosComponent />}


        </div>
    );
}

export default MainContainer;

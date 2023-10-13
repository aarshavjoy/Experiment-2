import React from 'react';
import PosComponent from '../PosComponent';
import PowComponent from '../PowComponent';
import Divider from '../../Divider';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

const MainContainer = () => {
    const [showPoW, setShowPow] = React.useState(false)
    const onHandleChange = ()=>[
        setShowPow()
    ]
    return (
        <div>
          {/* <FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label="Proof of Stake" />
  
 
</FormGroup> */}

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

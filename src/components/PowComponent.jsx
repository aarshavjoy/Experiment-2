import React from 'react';
import { generateRandomToken } from '../utilts';
import Login from './Common/Login';
import Divider from '../Divider';

const PowComponent = () => {
    const isLoging = true;
    return (
        <div className="App">
      <Divider title={"Proof of Work"}  />

        <div className="container-fluid container-full-height">
       
            <div className="row">
                <div className="col-md-8 left-column">
                  
                    <h2>Left Column</h2>
                   
                </div>
                <div className="col-md-4 right-column">
                    {isLoging &&  
          <Login generateRandomToken={generateRandomToken} /> 
                    
                    }
              
        

                  
                </div>
            </div>
        </div>
        </div>
    );
}

export default PowComponent;

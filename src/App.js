import Divider from './Divider';
import './App.css';
// import Login from './components/Login';
import Candidate from './components/Candidate';
import { useState } from 'react';
import Token from './components/Token';
import CustomizedTables from './components/Table';
import Tables from './components/Table';
// import CustomCaptcha from './components/Verification';
import MainContainer from './components/Common/MainContainer';


function App() {
  const [showTokenDialog, setShowTokenDialog] = useState(false);
  const [randomToken, setRandomToken] = useState('');
  const [currentPage, setCurrentPage] = useState('login');

  const generateRandomToken = () => {
    
    const min = 10000;
    const max = 99999;
    const token = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomToken(token);
    setShowTokenDialog(true);
    setCurrentPage('token');
  };

  const closeTokenDialog = () => {
    setShowTokenDialog(false);
    setCurrentPage('candidate');
  };
  let pageContent = null;

  // switch (currentPage) {
  //   case 'login':
  //     pageContent = <Login generateRandomToken={generateRandomToken} />;
  //     break;
  //   case 'token':
  //     pageContent = <Token token={randomToken} onClose={closeTokenDialog} />;
  //     break;
  //   case 'candidate':
  //     pageContent = <Candidate />;
  //     break;
  //   default:
  //     pageContent = <Login generateRandomToken={generateRandomToken} />;
  // }






  
  return (<>
    <div className="App">
    <div className="container-fluid container-full-height">
      <MainContainer />
 
    </div>
    </div>
    
    </>
  );
}

export default App;

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './details.css'
import { ColorLens } from '@mui/icons-material';
import './manifesto.css'
export default function Manifesto(props) {
  return (
    <>
    <div>
    <div>
<h3 className='manifesto-heading'>Election manifesto</h3>
      <Accordion  className='details'  style={{ background: 'black', borderColor: 'green', borderWidth: '1px', borderStyle: 'solid',borderRadius:'30px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Green Future Party <span class="material-symbols-outlined">

</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
             <ul>
                 <li>  Commit to reducing carbon emissions by 50% in the next ten years.</li>
                 <li>    Ban single-use plastics and invest in sustainable.</li>
                   </ul>
                   <div className='manifesto-btn'>
                   <button type="button" class="btn btn-outline-light manifesto-button "  onClick={props.onSelectClick}>Select</button>
                   </div>
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion className='details' style={{ background: 'black', borderColor:'#19A7CE', borderWidth: '1px', borderStyle: 'solid',borderRadius:'30px',marginTop:'5%' }}>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Technological Party
             {/* <i class="fa-solid fa-robot">    </i> */}
              </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Vote Percetage:40%</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet.
            <div className='manifesto-btn'>
                   <button type="button" class="btn btn-outline-light manifesto-button "  onClick={props.onSelectClick}>Select</button>
                   </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='details'  style={{ background: 'black', borderColor:'#EAC696', borderWidth: '1px', borderStyle: 'solid',borderRadius:'30px',marginTop:'5%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cultural Party</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Vote Percetage:40%</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet .
            <div className='manifesto-btn'>
            <button onClick={props.onCandidateDisplay}>Select</button>

                   </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
    </>
  );
}
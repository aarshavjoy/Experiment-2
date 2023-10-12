import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './details.css';

export default function BasicAccordion(props) {
  return (
    <>
      <div>
        <div>
          <Accordion className='details' style={{ background: 'black', borderColor: 'green', borderWidth: '1px', borderStyle: 'solid', borderRadius: '30px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Green Future Party <span className="material-symbols-outlined">nature_people</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Vote Percentage: 40%</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className='details' style={{ background: 'black', borderColor: '#19A7CE', borderWidth: '1px', borderStyle: 'solid', borderRadius: '30px', marginTop: '5%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Technological Party 
                {/* <i className="fa-solid fa-robot"></i> */}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Vote Percentage: 40%</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className='details' style={{ background: 'black', borderColor: '#EAC696', borderWidth: '1px', borderStyle: 'solid', borderRadius: '30px', marginTop: '5%', marginBottom: '5%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Cultural Party</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Vote Percentage: 40%</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className='next-button'>
          <button type="button" className="btn btn-outline-light details-btn" onClick={props.onNextClick}>next</button>

          </div>
        
        </div>
      </div>
    </>
  );
}

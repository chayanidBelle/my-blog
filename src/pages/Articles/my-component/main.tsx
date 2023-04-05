import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinearProgressBar from './practicing-components/linear-progress-bar';

const MainComponents = () => {
  const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({ theme }) => ({
      border: `1px solid ${theme.palette.divider}`,
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    })
  );

  return (
    /* 
    My practicing components list 
    1. linear progress bar
    2. circle progress bar 
    3. circle loading panel 
    4. linear loading panel
    5. 
    */
    <div style={{ width: '100%', padding: 100 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Linear Progress Bar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LinearProgressBar />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Circle Progress Bar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <LinearProgressBar /> */}
          <Typography>Waiting to implement...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MainComponents;

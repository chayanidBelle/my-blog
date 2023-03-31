import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    <div style={{ backgroundColor: 'antiquewhite', width: '100%', height: '1vh' }}>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Progress Bar</Typography>
        </AccordionSummary>
      </Accordion> */}
      <Typography style={{ padding: 100 }}>test</Typography>
    </div>
  );
};

export default MainComponents;

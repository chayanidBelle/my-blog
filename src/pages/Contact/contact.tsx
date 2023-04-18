import { Box } from '@mui/material';
import React from 'react';
import './contact.css';

const ContactComponent = () => {
  return (
    <div style={{ padding: 100 }}>
      <p>Contact Me</p>
      <ol>
        <li>Facebook: Belle'le Thamkittikun</li>
        <li>Linkedin: Chayanid Thamkittikun</li>
        <li>Instragram: lalabelle</li>
      </ol>

      <Box mt='30px'>
        <p>Buy me coffee and tea!</p>
        <a href='https://writer.dek-d.com/dekdee/writer/view.php?id=2331080' style={{ fontSize: '18px' }}>
          Follow this link and I want to say 'Thanks a lot' to everyone!
        </a>
      </Box>
    </div>
  );
};

export default ContactComponent;

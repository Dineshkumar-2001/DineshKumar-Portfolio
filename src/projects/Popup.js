import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './Popup.css'; // Import the CSS file

const Popup = ({ img, title, Desc, link, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle className="popup-title">{title}</DialogTitle>
      <DialogContent>
        {/* <img src={img} alt={title} /> */}
        <DialogContentText className="popup-content">{Desc}</DialogContentText>
      </DialogContent>
      <DialogActions className="popup-button">
        <Button onClick={onClose}>Close</Button>
        {/* <a href={link} target="_blank" rel="noopener noreferrer">
          <Button color="primary">Learn more</Button>
        </a> */}
      </DialogActions>
    </Dialog>
  );
};

export default Popup;

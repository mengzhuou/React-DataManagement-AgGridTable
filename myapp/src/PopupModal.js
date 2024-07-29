import React from 'react';
import './PopupModal.css';

const PopupModal = ({ onClose, inputValue, handleInputChange, handleSave }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Popup Modal</h2>
        <p>This is a simple popup modal.</p>
        <input
          placeholder="Enter New Value"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default PopupModal;

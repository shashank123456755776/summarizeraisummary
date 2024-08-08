import React from 'react';
import './FileUpload.css'; // Import component-specific CSS if needed

const FileUpload = ({ onFileChange }) => {
  return (
    <div className="file-upload">
      <input type="file" onChange={onFileChange} />
    </div>
  );
};

export default FileUpload;

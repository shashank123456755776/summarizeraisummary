import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import SummaryDisplay from './components/SummaryDisplay';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      const filePath = response.data.file_path;

      const summaryResponse = await axios.post('http://localhost:5000/summarize', { file_path: filePath });
      setSummary(summaryResponse.data.summary);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error uploading file or generating summary.');
    }
  };

  return (
    <div className="App">
      <h1>Document Summarizer</h1>
      <div className="container">
        <FileUpload onFileChange={onFileChange} />
        <button onClick={onUpload}>Upload and Summarize</button>
        {error && <p className="error">{error}</p>}
        {summary && <SummaryDisplay summary={summary} />}
      </div>
    </div>
  );
}

export default App;

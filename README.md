# Document Summarization Web Application

## Overview

This application allows users to upload documents (PDF, DOCX, TXT) and receive summarized versions using a Language Model (LLM). It consists of:

1. **Backend (Python)**: Manages file uploads and document summarization.
2. **Frontend (React)**: Provides the user interface for uploading documents and displaying summaries.

## Table of Contents

- [Project Structure](#project-structure)
- [Backend (Python)](#backend-python)
  - [Setup Instructions](#setup-instructions)
  - [File Structure](#file-structure)
  - [Endpoints](#endpoints)
  - [How to Test](#how-to-test)
- [Frontend (React)](#frontend-react)
  - [Setup Instructions](#setup-instructions-1)
  - [File Structure](#file-structure-1)
  - [Features](#features)
  - [How to Test](#how-to-test-1)
- [Connecting Frontend and Backend](#connecting-frontend-and-backend)
- [Submission Requirements](#submission-requirements)
- [License](#license)

## Project Structure

The project directory is organized as follows:

project-root/
│
├── backend/
│ ├── app.py # Main Flask application file
│ ├── model/
│ │ ├── init.py # Initializes the model package
│ │ └── llm_model.py # Contains the model integration code
│ ├── uploads/ # Directory for storing uploaded files
│ ├── requirements.txt # Lists Python dependencies
│ └── Dockerfile # Optional Dockerfile for containerization
│
├── frontend/
│ ├── public/ # Public static files
│ │ ├── index.html # Main HTML file
│ │ └── favicon.ico # Favicon
│ ├── src/ # Source code for React application
│ │ ├── App.js # Main React component
│ │ ├── index.js # Entry point for React application
│ │ ├── App.css # CSS styles
│ │ └── components/ # React components
│ │ ├── FileUpload.js # File upload component
│ │ └── SummaryDisplay.js # Summary display component
│ ├── package.json # Node.js dependencies and scripts
│ └── Dockerfile # Optional Dockerfile for containerization
│
├── README.md # This file
└── .gitignore # Git ignore file


## Backend (Python)

### Setup Instructions

1. **Navigate to the Backend Directory**

   ```bash
   cd backend
Create and Activate a Virtual Environment

python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
Install Dependencies

Create requirements.txt with:

Flask==2.1.2
torch==2.2.0
transformers==4.36.1
tokenizers==0.15.0  # Ensure this version is compatible with your transformers version
safetensors==0.4.1
Werkzeug==2.0.3
flask-cors==3.0.10

Install them:

pip install -r requirements.txt

Run the Flask Application:by below commands
python app.py

File Structure

app.py: Main Flask application file.
model/llm_model.py: Contains GPT-2 model integration and summarization logic.
uploads/: Directory for storing uploaded files.
requirements.txt: Python dependencies for the backend.
Dockerfile: Optional Dockerfile for backend containerization.
Endpoints
/upload: POST request for uploading files.
/summarize: POST request for summarizing documents.

How to Test
Run the Backend: Start the Flask server with python app.py.
Test Endpoints: Use tools like Postman or cURL to test /upload and /summarize.

Frontend (React)
Setup Instructions
Navigate to the Frontend Directory

cd frontend
Create a React App

npx create-react-app .
Install Dependencies

npm install axios
Run the React Application

npm start
File Structure
src/components/FileUpload.js: Component for file upload.
src/components/SummaryDisplay.js: Component for displaying summaries.
src/App.js: Main React component.
package.json: Node.js dependencies for the frontend.
Dockerfile: Optional Dockerfile for frontend containerization.
Features
File Upload: Allows users to upload documents.
Summary Display: Shows the summary of the uploaded document.
How to Test
Run the Frontend: Start the React application with npm start.
Interact with the App: Upload a file and view the summary.
Connecting Frontend and Backend
Ensure Backend is Running: Start the Flask server.
Ensure Frontend is Running: Start the React application.
Check CORS: Ensure the backend allows requests from the frontend.
Submission Requirements
Complete Codebase: Both backend and frontend should be functional.
Documentation: This README.md should include setup and usage instructions.
Deployment: Optionally deploy using Docker or other tools.
License

### Highlights:

- **Project Structure**: Provides an overview of how my project is organized.
- **Backend and Frontend Setup Instructions**: Detailed steps for setting up and running both parts of my pplication.
- **File Structure**: Description of the purpose of each file and directory.
- **Endpoints**: Information on the API endpoints available in the backend.
- **How to Test**: Guidance on how to run and test my application.
- **Connecting Frontend and Backend**: Steps to ensure that both parts of my application work together.
- **Submission Requirements**: What needs to be included for submission.




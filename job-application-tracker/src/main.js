
// import { loadFromStorage } from './app.storage.js';
import { state } from './app.state.js';
import { renderApp } from './components/App.js';

document.addEventListener('DOMContentLoaded', () => {
  // loadFromStorage();
  state.applications = [
    {
      "id": "1750430990488",
      "applicantName": "Nikhil",
      "companyName": "Mindfire",
      "jobRole": "ASE",
      "jobType": "onsite",
      "applicationDate": "2025-06-19",
      "jobStatus": "rejected",
      "notes": "Test",
      "location": "Bhubaneswar"
    },
    {
      "id": "1750447954682",
      "applicantName": "Subhranhsu",
      "companyName": "Spikewell",
      "jobRole": "SDE",
      "jobType": "onsite",
      "location": "Bhubaneswar",
      "applicationDate": "2024-02-12",
      "jobStatus": "applied",
      "notes": "Test"
    },
    {
      "id": "1750656916218",
      "applicantName": "Narayan Pradhan",
      "companyName": "Mindfire",
      "jobRole": "ASE",
      "jobType": "onsite",
      "location": "Bhubaneswar",
      "applicationDate": "2025-06-22",
      "jobStatus": "applied",
      "notes": "Test"
    }
  ]

  renderApp();
});
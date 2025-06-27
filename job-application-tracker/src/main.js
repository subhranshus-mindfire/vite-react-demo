
import { loadFromStorage } from './app.storage.js';
import { setState } from './app.state.js';
import { renderApp } from './components/App.js';

document.addEventListener('DOMContentLoaded', () => {
  setState("applications", loadFromStorage("applications")) || []
  renderApp();
});
import { state } from '../app.state.js';
import ApplicationCard from './ApplicationCard.js';

function ApplicationCards() {
  const list = document.createElement('ul');
  list.id = 'applicationTable';
  list.className = 'grid';

  state.applications.forEach((app, index) => {
    list.appendChild(ApplicationCard(app, index));
  });

  return list;
}

export default ApplicationCards;

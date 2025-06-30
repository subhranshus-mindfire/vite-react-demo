import { getState } from '../app.state.js';
import ApplicationCard from './ApplicationCard.js';

function ApplicationCards() {
  const list = document.createElement('ul');
  list.id = 'applicationTable';

  const viewType = getState("viewType") || "grid";
  list.className = viewType === "row" ? "flex" : "grid";

  getState("applications")?.forEach((app, index) => {
    list.appendChild(ApplicationCard(app, index));
  });

  return list;
}

export default ApplicationCards;

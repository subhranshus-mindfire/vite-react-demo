import ApplicationCard from './ApplicationCard.js';
import ApplicationTable from './ApplicationTable.js';
import { getState, observe } from '../app.state.js';

const Applications = () => {
  const container = document.createElement('div');
  container.id = 'applicationTableWrapper';

  const render = () => {
    container.innerHTML = '';
    const viewType = getState('viewType');
    const applications = getState('applications') || [];

    if (viewType === 'row') {
      container.appendChild(ApplicationTable(applications));
    } else {
      const ul = document.createElement('ul');
      ul.id = 'applicationTable';
      ul.className = 'grid';
      applications.forEach((app, index) => {
        ul.appendChild(ApplicationCard(app, index));
      });
      container.appendChild(ul);
    }
  };

  render();

  observe('viewType', render);
  observe('applications', render);

  return container;
};

export default Applications;

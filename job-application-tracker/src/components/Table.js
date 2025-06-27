import ApplicationCard from './ApplicationCard';
import ApplicationTable from './ApplicationTable';
import { getState } from '../app.state';

const Table = () => {
  if (getState("view") === 'row') {
    return ApplicationTable(state.applications);
  }

  const list = document.createElement('ul');
  list.id = 'applicationTable';
  list.className = 'grid';

  getState("applications").forEach((app, index) => {
    list.appendChild(ApplicationCard(app, index));
  });

  return list;
};

export default Table;

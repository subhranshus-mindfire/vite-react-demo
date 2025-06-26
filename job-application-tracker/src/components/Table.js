import ApplicationCard from './ApplicationCard';
import ApplicationTable from './ApplicationTable';
import { state } from '../app.state';

const Table = () => {
  if (state.view === 'row') {
    return ApplicationTable(state.applications);
  }

  const list = document.createElement('ul');
  list.id = 'applicationTable';
  list.className = 'grid';

  state.applications.forEach((app, index) => {
    list.appendChild(ApplicationCard(app, index));
  });

  return list;
};

export default Table;

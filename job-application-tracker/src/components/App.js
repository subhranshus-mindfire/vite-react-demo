import { getState } from '../app.state.js';
import Alert from './Alert.js';
import Counters from './Counters.js';
import Header from "./Header";
import Hero from './Hero.js';

export function renderApp() {
  const root = document.getElementById('app');
  root.innerHTML = '';

  const layout = document.createElement('div');
  layout.className = 'app container';

  layout.appendChild(Header());
  layout.appendChild(Counters());
  layout.appendChild(Hero());

  if (getState("toast")) {
    layout.append(Alert(getState("toast")));
  }

  root.appendChild(layout);
}

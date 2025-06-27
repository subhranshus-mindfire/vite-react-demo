import { getState, setState } from "../app.state";

const ToggleViewButtons = () => {
  if (!getState("view")) setState("view", "grid");

  const wrapper = document.createElement("div");
  wrapper.className = "toogle-btn";

  const view = getState("view");

  wrapper.innerHTML = `
    <input type="button" value="Row" id="row-btn" class="${view === 'row' ? 'active-btn' : ''}">
    <input type="button" value="Grid" id="grid-btn" class="${view === 'grid' ? 'active-btn' : ''}">
  `;

  wrapper.querySelector("#row-btn").addEventListener("click", () => {
    setState("view", "row");
  });

  wrapper.querySelector("#grid-btn").addEventListener("click", () => {
    setState("view", "grid");
  });

  return wrapper;
};

export default ToggleViewButtons;

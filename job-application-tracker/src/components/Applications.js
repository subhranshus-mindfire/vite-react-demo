import { state } from "../app.state";
import Div from "../utils/dom/Div"
import Table from "./Table"

const Applications = () => {
  const wrapper = Div("", { class: "right" });

  const heading = document.createElement("h2");
  heading.className = "text-center right-heading";
  heading.textContent = "Job Applications";

  const toggle = document.createElement("div");
  toggle.className = "toogle-btn";
  toggle.innerHTML = `
    <input type="button" value="Row" id="row-btn" class=${state.view == "row" ? "active-btn" : ""}>
    <input type="button" value="Grid" id="grid-btn" class=${state.view != "row" ? "active-btn" : ""}>
  `;

  wrapper.appendChild(heading);
  wrapper.appendChild(toggle);
  wrapper.appendChild(Table());

  const rowBtn = wrapper.querySelector("#row-btn")
  rowBtn.addEventListener("click", () => {
    state.setView("row")
  })

  const gridBtn = wrapper.querySelector("#grid-btn")
  gridBtn.addEventListener("click", () => {
    state.setView("grid")
  })
  return wrapper;
};

export default Applications;

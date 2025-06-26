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
    <input type="button" value="Row" id="row-btn">
    <input type="button" value="Grid" id="grid-btn" class="active-btn">
  `;

  wrapper.appendChild(heading);
  wrapper.appendChild(toggle);
  wrapper.appendChild(Table());
  return wrapper;
};

export default Applications;

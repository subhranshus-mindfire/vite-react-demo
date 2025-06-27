import Div from "../utils/dom/Div";
import Table from "./Table";
import ToggleViewButtons from "./ToggleViewButtons";

const Applications = () => {
  const wrapper = Div("", { class: "right" });

  const heading = document.createElement("h2");
  heading.className = "text-center right-heading";
  heading.textContent = "Job Applications";

  wrapper.appendChild(heading);
  wrapper.appendChild(ToggleViewButtons());
  wrapper.appendChild(Table());

  return wrapper;
};

export default Applications;

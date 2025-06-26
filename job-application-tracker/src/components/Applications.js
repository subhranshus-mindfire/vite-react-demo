import Div from "../utils/dom/Div"

const Applications = () => {
  const applications = Div("", { "class": "right" })
  applications.innerHTML = `
    <h2 class="text-center right-heading">Job Applications</h2>
    <div class="toogle-btn">
      <input type="button" value="Row" id="row-btn">
      <input type="button" value="Grid" id="grid-btn" class="active-btn">
    </div>
    <ul id="applicationTable" class="grid"></ul>`
  return applications
}

export default Applications 
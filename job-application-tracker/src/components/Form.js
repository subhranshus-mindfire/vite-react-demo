import Div from "../utils/dom/Div";

const Form = () => {
  const form = document.createElement("div");
  form.className = "form bg-light";

  form.innerHTML = `
    <h2 class="text-center"><u>Job Application Form</u></h2>
    <div class="flex justify-center">
      <form id="applicationForm">
        <input type="hidden" name="applicationId" id="applicationId">
        <div class="input">
          <label for="applicantName">Applicant Name<span class="text-danger">*</span></label>
          <input type="text" name="applicantName" id="applicantName">
          <span class="applicantNameError text-danger hidden">-Applicant name required</span>
        </div>
        <div class="input">
          <label for="companyName">Company Name<span class="text-danger">*</span></label>
          <input type="text" name="companyName" id="companyName">
          <span class="nameError text-danger hidden">-Company name required</span>
        </div>
        <div class="input">
          <label for="jobRole">Job Role<span class="text-danger">*</span></label>
          <input type="text" name="jobRole" id="jobRole">
          <ul id="autocompleteRoles" class="autocomplete-roles hidden"></ul>
          <span class="roleError text-danger hidden">-Job role required</span>
        </div>
        <div class="input">
          <label for="jobType">Job Type<span class="text-danger">*</span></label>
          <select name="jobType" id="jobType">
            <option value="onsite">On-Site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <span class="jobtypeError text-danger hidden">-Job type required</span>
        </div>
        <div class="input">
          <label for="locationInput">Location<span class="text-danger">*</span></label>
          <input type="text" name="location" id="locationInput">
          <span class="locationError text-danger hidden">-Location required</span>
        </div>
        <div class="input">
          <label for="applicationDate">Application Date<span class="text-danger">*</span></label>
          <input type="date" name="applicationDate" id="applicationDate">
          <span class="applicationdateError text-danger hidden">-Application date required</span>
        </div>
        <div class="input">
          <label for="jobStatus">Application Status<span class="text-danger">*</span></label>
          <select name="jobStatus" id="jobStatus">
            <option value="applied">Applied</option>
            <option value="interviewing">Interviewing</option>
            <option value="rejected">Rejected</option>
            <option value="hired">Hired</option>
          </select>
          <span class="statusError text-danger hidden">-Application status required</span>
        </div>
        <div class="input">
          <label for="notes">Notes:</label>
          <input type="text" name="notes" id="notes">
        </div>
        <div class="buttons flex justify-center">
          <div class="submit" id="submit">
            <input type="submit" value="Submit" id="submit-btn">
          </div>
          <div class="update hidden" id="update">
            <input type="button" value="Update" id="update-btn">
            <input type="button" value="Cancel" id="cancel-btn">
          </div>
        </div>
      </form>
    </div>
  `;

  const formWrapper = Div("", { "class": "left" })
  formWrapper.appendChild(form)
  return formWrapper;
};

export default Form;

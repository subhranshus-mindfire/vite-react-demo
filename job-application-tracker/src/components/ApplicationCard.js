import { getState, setState } from '../app.state';
import { saveToStorage } from '../app.storage';
import { showAlert } from './Alert';

function ApplicationCard(application, index) {
  const li = document.createElement('li');
  li.className = 'application-card';
  li.setAttribute("id", `app-${index}`);

  function updateApplication(appId) {
    const applications = getState("applications") || [];

    const updated = {
      id: appId,
      applicantName: document.getElementById("applicantName").value.trim(),
      companyName: document.getElementById("companyName").value.trim(),
      jobRole: document.getElementById("jobRole").value.trim(),
      jobType: document.getElementById("jobType").value,
      location:
        document.getElementById("jobType").value === "remote"
          ? "Remote"
          : document.getElementById("locationInput").value.trim(),
      applicationDate: document.getElementById("applicationDate").value,
      jobStatus: document.getElementById("jobStatus").value,
      notes: document.getElementById("notes").value.trim(),
    };

    const index = applications.findIndex(app => app.id === appId);
    if (index !== -1) {
      applications[index] = updated;
      saveToStorage("applications", applications)
      setState("applications", applications);
      // I neeed to do the alert here
      showAlert("Updated Successfully")
    }
  }
  const populateForm = () => {
    const prevFocus = getState("prevFocus");
    if (prevFocus) {
      const prevEl = document.getElementById(prevFocus);
      if (prevEl) prevEl.classList.remove("add-focus");
    }

    const currentId = `app-${index}`;
    setState("prevFocus", currentId);

    const currentEl = document.getElementById(currentId);
    if (currentEl) currentEl.classList.add("add-focus");

    document.getElementById("applicationId").value = application.id;
    document.getElementById("applicantName").value = application.applicantName;
    document.getElementById("companyName").value = application.companyName;
    document.getElementById("jobRole").value = application.jobRole;
    document.getElementById("jobType").value = application.jobType;
    document.getElementById("applicationDate").value = application.applicationDate;
    document.getElementById("jobStatus").value = application.jobStatus;
    document.getElementById("notes").value = application.notes;

    if (application.jobType === "remote") {
      document.getElementById("location").style.display = "none";
    } else {
      document.getElementById("location").style.display = "flex";
      document.getElementById("locationInput").value = application.location;
    }

    document.getElementById("submit").classList.add("hidden");
    document.getElementById("update").classList.remove("hidden");

    const updateBtn = document.getElementById("update-btn");
    updateBtn.onclick = () => {
      updateApplication(application.id)
    };

    document.getElementById("cancel-btn").onclick = () => {
      window.location.reload()
    };
  };



  li.innerHTML = `
    <div class="application-card-header flex">
      <div class="application-card-header-left">
        <div class="application-card-status">
          <span class="${application.jobStatus === 'hired' ? 'text-success' : application.jobStatus === 'rejected' ? 'text-danger' : ''}">
            ${application.jobStatus}
          </span>
        </div>
        <div class="application-card-applicantName"><b>${application.applicantName}</b></div>
        <div class="application-card-role">${application.jobRole}</div>
      </div>
      <div class="application-card-header-right">
        <div class="actions flex nowrap">
          <a class="edit" href="#form-heading" id="app-edit-${index}"><i class="fa-solid fa-pen"></i> Edit</a>
          <a class="delete" id="app-delete-${index}"><i class="fa-solid fa-trash"></i> Delete</a>
        </div>
      </div>
    </div>
    <div class="application-card-body">
      <div class="application-card-name">
        <span title="Company"><i class="fa-solid fa-building"></i> ${application.companyName}</span>
      </div>
      <div class="flex application-card-footer">
        <div class="application-card-location" title="Job Location">
          <span><i class="fa-solid fa-location-dot"></i> ${application.jobType === 'remote' ? 'Remote' : application.location}</span>
        </div>
        <div class="application-card-date">Applied On ${application.applicationDate}</div>
      </div>
    </div>
  `;

  li.querySelector(`#app-edit-${index}`).addEventListener("click", (e) => {
    e.preventDefault();
    populateForm();
  });

  li.querySelector(`#app-delete-${index}`).addEventListener("click", () => {
    const apps = getState("applications") || [];
    apps.splice(index, 1);
    setState("applications", [...apps]);
    // Show Alert
  });

  return li;
}

export default ApplicationCard;

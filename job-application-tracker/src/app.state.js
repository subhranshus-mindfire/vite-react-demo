import { renderApp } from "./components/App";

export const state = {
  applications: [],
  view: "",

  setApplications(apps) {
    this.applications = apps;
    renderApp();
  },

  setView(view) {
    if (this.view !== view) {
      this.view = view;
      renderApp();
    }
  },

  addApplication(app) {
    this.applications.push(app);
    renderApp();
  },

  updateApplication(index, updatedApp) {
    this.applications[index] = updatedApp;
    renderApp();
  },

  deleteApplication(index) {
    this.applications.splice(index, 1);
    renderApp();
  }
};

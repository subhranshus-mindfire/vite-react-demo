import { getFormData, validateForm } from "./app.logic";
import { state } from "./app.state";

export function handleAdd() {
  const formData = getFormData()
  if (!validateForm(formData)) return;

  formData.id = Date.now();
  state.setApplications([...(state.applications), formData])
}

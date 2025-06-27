export function handleJobTypeChange(formWrapper) {
  console.log(formWrapper)
  const type = formWrapper.querySelector('#jobType').value;
  const locationField = formWrapper.querySelector('#location');

  locationField.style.display = type === 'remote' ? 'none' : 'flex';
}
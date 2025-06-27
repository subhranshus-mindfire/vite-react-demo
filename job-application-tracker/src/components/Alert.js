
import Div from '../utils/dom/Div'

const Alert = (message) => {
  const alertBox = Div(message, { "id": "customAlert", "class": "custom-alert" })
  alertBox.textContent = message;
  alertBox.className = `custom-alert show success`;
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000)
  return alertBox;
}

export default Alert
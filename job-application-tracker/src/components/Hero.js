import Div from "../utils/dom/Div"
import Applications from "./Applications"
import Form from "./Form"

const Hero = () => {
  const hero = Div("", { "class": "grid halfs gap-2" })
  hero.appendChild(Form())
  hero.appendChild(Applications())
  return hero
}

export default Hero
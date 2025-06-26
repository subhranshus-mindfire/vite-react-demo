import Card from "./Card"
const Counters = () => {

  const counters = document.createElement("div")
  counters.classList.add("flex", "statuses", "justify-content-evenly")
  let cards = [
    {
      id: "totalApplications",
      text: "Applications",
      logo: `<i class="fa-solid fa-envelope"></i>`,
      value: 0
    },
    {
      id: "hiredCount",
      text: "Hired",
      logo: `<i class="fa-solid fa-circle-check" style="color: #37ff00;"></i>`,
      value: 0
    },
    {
      id: "appliedCount",
      text: "Applied",
      logo: `<i class="fa-solid fa-arrow-right-to-bracket"></i>`,
      value: 0
    },
    {
      id: "interviewingCount",
      text: "Interviewing",
      logo: `<i class="fa-solid fa-chalkboard-user"></i>`,
      value: 0
    },
    {
      id: "rejectedCount",
      text: "Rejected",
      logo: `<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`,
      value: 0
    }
  ];
  cards.forEach((card) => {
    let id = card.id;
    let text = card.text;
    let logo = card.logo;
    let value = card.value
    counters.append(Card(id, text, logo, value))
  })

  return counters
}

export default Counters
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  }
]

const teamContainer = document.getElementById("team-container");

for(let member of team)
{
  teamContainer.innerHTML += `
    <div class="col mb-5">
      <div class="card">
        <img src="assets/img/${member.image}" class="card-img-top">
        <div class="card-body bg-white text-center">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
      </div>
    </div>
  `
}


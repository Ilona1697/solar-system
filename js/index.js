"use strict";
const btnStart = document.getElementById("btn-start");

const dropdownContent = document.getElementById("dropdown-content");
const speedBtns = dropdownContent.querySelectorAll("a");

const data = {
  planets: [
    {
      classNamePlanet: "planet-one",
      classNameOrbit: "orbit-one",
      imgUrl: "1planet.png",
      orbitSpeed: 4,
    },
    {
      classNamePlanet: "planet-two",
      classNameOrbit: "orbit-two",
      imgUrl: "2planet.png",
      orbitSpeed: 7,
    },
    {
      classNamePlanet: "planet-three",
      classNameOrbit: "orbit-three",
      imgUrl: "3planet.png",
      orbitSpeed: 7,
    },
    {
      classNamePlanet: "planet-four",
      classNameOrbit: "orbit-four",
      imgUrl: "4planet.png",
      orbitSpeed: 9,
    },
    {
      classNamePlanet: "planet-five",
      classNameOrbit: "orbit-five",
      imgUrl: "5planet.png",
      orbitSpeed: 6,
    },
    {
      classNamePlanet: "planet-six",
      classNameOrbit: "orbit-six",
      imgUrl: "6planet.png",
      orbitSpeed: 8,
    },
    {
      classNamePlanet: "planet-seven",
      classNameOrbit: "orbit-seven",
      imgUrl: "7planet.png",
      orbitSpeed: 8,
    },
    {
      classNamePlanet: "planet-eight",
      classNameOrbit: "orbit-eight",
      imgUrl: "8planet.png",
      orbitSpeed: 9,
    },
  ],
};
class Planet {
  constructor(classNamePlanet, classNameOrbit, imgUrl) {
    this.classNamePlanet = classNamePlanet;
    this.classNameOrbit = classNameOrbit;
    this.imgUrl = imgUrl;
  }
  render() {
    const sun = document.getElementById("sun");

    return (sun.innerHTML += `<div class="item">
              <div class="orbit ${this.classNameOrbit}">
                <div class="planet ${this.classNamePlanet}">
                  <img src="/img/${this.imgUrl}" alt="" />
                </div>
              </div>
            </div>`);
  }
}

class SolarSystem {
  constructor() {}
  start() {
    const orbits = document.querySelectorAll(".orbit");
    orbits.forEach((elem) => {
      elem.classList.add("animation__active");
      btnStart.disabled = "true";
      btnStart.style.backgroundColor = "#555555";
      btnStart.style.cursor = "none";
    });
  }
}

const solarSystem = new SolarSystem();
btnStart.addEventListener("click", solarSystem.start, true);

class Orbit {
  constructor(speed) {
    this.initSpeed = speed;
    this.selectedSpeed = "";
    this.maxSpeed = this.initSpeed - this.initSpeed / 2;
    this.minSpeed = this.initSpeed + this.initSpeed / 2;
  }
  changeSpeed(speed) {
    this.selectedSpeed = speed;
    switch (this.selectedSpeed) {
      case 0.5:
        this.setSpeed(this.minSpeed);
        break;
      case 1:
        this.setSpeed(this.initSpeed);
        break;
      case 1.5:
        this.setSpeed(this.maxSpeed);
        break;
      default:
        break;
    }
  }
  setSpeed(speed) {
    const orbits = document.querySelectorAll(".orbit");
    orbits.forEach((elem) => {
      elem.style.animationDuration = speed + "s";
    });
    console.log(this.initSpeed, speed, this.selectedSpeed);
  }
}

speedBtns.forEach((btn) => {
  btn.addEventListener("click", changeSpeed);
});

data.planets.forEach((planet) => {
  new Planet(
    planet["classNamePlanet"],
    planet["classNameOrbit"],
    planet["imgUrl"]
  ).render();
});

function changeSpeed(event) {
  let selectedSpeed = Number.parseFloat(event.target.innerHTML);
  data.planets.forEach((planet) => {
    new Orbit(planet["orbitSpeed"]).changeSpeed(selectedSpeed);
  });
}

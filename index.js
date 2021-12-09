const education = [
  {
    level: "University",
    duration: "2019 - present",
    name: "International University of Sarajevo",
    description: `While starting uni, I knew that I'm making a complete step into the unknown, because of the fact that I never did ANY programming. However, I was always pretty good at math, so I thought that Software Engineering was going to be a walk in the park for me. As previously stated, I'm on my third year now, and my past two years have been filled with programming and math. Although I found problem solving tough when I first started, throughout my stay I've learned that it's all about how much you put yourself into the work you submit/do. As I started university, a whole new chapter of sports opened up for me, and that is fitness. Specifically powerlifting at first, then functonal training/bodybuilding. During the first COVID-19 lockdown, I finished my level 3 EQF personal trainer diploma.`,
  },
  {
    level: "High School",
    duration: "2014 - 2019",
    name: "Richmond Park International Secondary School",
    description: `Picking out a high school in Sarajevo was probably one of the biggest deals at that time. As a scholarship holder, I opted for Richmond Park, at the time known as the International High School of Sarajevo. During my 4 years of high school I got into grappling and brasilian jiu-jitsu (or BJJ). I've always found contact sports to be very humbling, as one needs to let go of their own ego in return for knowledge and progress. While improving my DJ skills, and while exploring different music genres I started learning about music production. From that day I knew I wanted to study music in hope of becoming an audio engineer. Due to some unexpected complications I stayed home and made a step into something I did not know much of at the time.`,
  },
  {
    level: "Elementary School",
    duration: "2005 - 2014",
    name: "O.S. Cengic Vila 1",
    description: `During, and even before elementary, thanks to my brilliant parents I started learning and practicing art & music. However, being an only child, I always had to deliver top grades, just for my parent's sake of teaching me discipline. At the age of 5 I started playing the guitar, and at age 6 I was already going to another elementary school, Osnovna muzička i baletska škola Novo Sarajevo. Video games had a massive influence that brought me into the computer world. Growing up on many musical influences and genres (ranging from classic music, to metal, rock, pop, rap, techno, house etc.) during my senior year of elementary I got into DJing.`,
  },
];

const subheadings = document.querySelectorAll(".eduSubheadings");
const timePeriods = document.querySelectorAll(".timePeriod");
const schoolNames = document.querySelectorAll(".schoolNames");
const schoolTexts = document.querySelectorAll(".schoolText");

for (let i = 0; i < education.length; i++) {
  subheadings[i].textContent = education[i].level;
  timePeriods[i].textContent = education[i].duration;
  schoolNames[i].textContent = education[i].name;
  schoolTexts[i].textContent = education[i].description;
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isOpen");
  menu.classList.toggle("isOpen");
});

window.addEventListener("scroll", () => {
  const top_btn = document.getElementById("top-btn");
  if (top_btn !== null) {
    //console.log(window.scrollY);
    top_btn.classList.toggle("show-top-btn", window.scroll > 300);
  }
});

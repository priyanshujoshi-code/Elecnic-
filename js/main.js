
// const projects=[['Air India Lounge','assets/projects/Air India Lounge.jpeg'],['BBC','assets/projects/BBC.png'],['Bharti Airtel','assets/projects/Bharti-Airtel.jpg'],['CAF India','assets/projects/CAF INDIA.webp'],['EY','assets/projects/E&Y.webp'],['I Squared','assets/projects/I Squared.webp'],['IndiGo IFLY','assets/projects/Indigo IFLY.webp'],['Lauritz Knudsen','assets/projects/LAURITZ KNUDSEN.webp'],['MakeMyTrip','assets/projects/MAKEMYTRIP.webp'],['Noida International Airport','assets/projects/Noida International Airport.jpg'],['Qualcomm India','assets/projects/QUALCOMM INDIA.jpg'],['Renesas','assets/projects/Renesas.jpg']];
// const grid=document.getElementById('projectGrid');projects.forEach(([name,src],i)=>{const card=document.createElement('article');card.className='project';card.tabIndex=0;card.innerHTML=`<img src="${src}" alt="${name} project image" loading="lazy"><div class="pad"><h3>${name}</h3><small>Project reference</small><p>View the supplied project image and reference.</p><span class="more">VIEW DETAILS →</span></div>`;const open=()=>{document.getElementById('detailImage').src=src;document.getElementById('detailImage').alt=name;document.getElementById('detailTitle').textContent=name;document.getElementById('projectDetail').classList.add('open');document.getElementById('projectDetail').scrollIntoView({behavior:'smooth',block:'nearest'});};card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});grid.appendChild(card)});
// document.getElementById('closeDetail').addEventListener('click',()=>document.getElementById('projectDetail').classList.remove('open'));document.getElementById('menu').addEventListener('click',()=>document.getElementById('links').classList.toggle('show'));document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('links').classList.remove('show')));document.getElementById('year').textContent=new Date().getFullYear();const heroSlides=['assets/work/P%20(1).jpeg','assets/work/P%20(2).jpeg','assets/work/P%20(8).jpeg','assets/work/P%20(56).jpeg','assets/work/P%20(24).jpeg'];let heroIndex=0;setInterval(()=>{heroIndex=(heroIndex+1)%heroSlides.length;const hero=document.querySelector('.hero');hero.style.backgroundImage=`url("${heroSlides[heroIndex]}")`;},2500);
// const aboutSlides=['assets/work/P%20(2).jpeg','assets/work/P%20(8).jpeg','assets/work/P%20(56).jpeg','assets/work/P%20(24).jpeg'];let aboutIndex=0;const aboutPhoto=document.querySelector('.about img');setInterval(()=>{aboutIndex=(aboutIndex+1)%aboutSlides.length;aboutPhoto.src=aboutSlides[aboutIndex];},2500);


/* =====================================
   ELECNIC PROJECT PORTFOLIO
===================================== */

const projects = [
  ["Air India Lounge", "assets/projects/Air India Lounge.jpeg"],
  ["BBC", "assets/projects/BBC.png"],
  ["Bharti Airtel", "assets/projects/Bharti-Airtel.jpg"],
  ["CAF India", "assets/projects/CAF INDIA.webp"],
  ["EY", "assets/projects/E&Y.webp"],
  ["I Squared", "assets/projects/I Squared.webp"],
  ["IndiGo IFLY", "assets/projects/Indigo IFLY.webp"],
  ["Lauritz Knudsen", "assets/projects/LAURITZ KNUDSEN.webp"],
  ["MakeMyTrip", "assets/projects/MAKEMYTRIP.webp"],
  ["Noida International Airport", "assets/projects/Noida International Airport.jpg"],
  ["Qualcomm India", "assets/projects/QUALCOMM INDIA.jpg"],
  ["Renesas", "assets/projects/Renesas.jpg"]
];


/* =====================================
   PROJECT PORTFOLIO
===================================== */

const grid = document.getElementById("projectGrid");

if (grid) {

  projects.forEach(([name, src]) => {

    const card = document.createElement("article");

    card.className = "project";
    card.tabIndex = 0;

    card.innerHTML = `
      <img
        src="${src}"
        alt="${name} project image"
        loading="lazy"
      >

      <div class="pad">

        <h3>${name}</h3>

        <small>Project reference</small>

        <p>
          View the supplied project image and reference.
        </p>

        <span class="more">
          VIEW DETAILS →
        </span>

      </div>
    `;

    /* Open project details */

    const openProject = () => {

      const detailImage = document.getElementById("detailImage");
      const detailTitle = document.getElementById("detailTitle");
      const projectDetail = document.getElementById("projectDetail");

      if (!detailImage || !detailTitle || !projectDetail) {
        return;
      }

      detailImage.src = src;
      detailImage.alt = name;

      detailTitle.textContent = name;

      projectDetail.classList.add("open");

      projectDetail.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    };

    /* Mouse click */

    card.addEventListener("click", openProject);

    /* Keyboard accessibility */

    card.addEventListener("keydown", (event) => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openProject();

      }

    });

    grid.appendChild(card);

  });

}


/* =====================================
   CLOSE PROJECT DETAILS
===================================== */

const closeDetail = document.getElementById("closeDetail");

if (closeDetail) {

  closeDetail.addEventListener("click", () => {

    const projectDetail = document.getElementById("projectDetail");

    if (projectDetail) {
      projectDetail.classList.remove("open");
    }

  });

}


/* =====================================
   MOBILE NAVIGATION
===================================== */

const menu = document.getElementById("menu");
const links = document.getElementById("links");

if (menu && links) {

  menu.addEventListener("click", () => {

    const isOpen = links.classList.toggle("show");

    menu.setAttribute("aria-expanded", String(isOpen));

    menu.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });

  /* Close menu after clicking navigation links */

  document.querySelectorAll("#links a").forEach((link) => {

    link.addEventListener("click", () => {

      links.classList.remove("show");

      menu.setAttribute("aria-expanded", "false");

      menu.setAttribute("aria-label", "Open navigation");

    });

  });

}


/* =====================================
   CURRENT YEAR
===================================== */

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}


/* =====================================
   HERO BACKGROUND SLIDESHOW
===================================== */

const heroSlides = [
  "assets/work/P%20(1).jpeg",
  "assets/work/P%20(2).jpeg",
  "assets/work/P%20(8).jpeg",
  "assets/work/P%20(56).jpeg",
  "assets/work/P%20(24).jpeg"
];

let heroIndex = 0;

const hero = document.querySelector(".hero");

if (hero && heroSlides.length > 1) {

  setInterval(() => {

    heroIndex = (heroIndex + 1) % heroSlides.length;

    const image = heroSlides[heroIndex];

    /*
      Keep the existing dark overlay
      while changing the background image.
    */

    hero.style.backgroundImage = `
      linear-gradient(
        90deg,
        rgba(16, 30, 53, 0.94) 0%,
        rgba(16, 30, 53, 0.78) 55%,
        rgba(16, 30, 53, 0.35) 100%
      ),
      url("${image}")
    `;

  }, 2500);

}


/* =====================================
   ABOUT SECTION IMAGE SLIDESHOW
===================================== */

const aboutSlides = [
  "assets/work/P%20(2).jpeg",
  "assets/work/P%20(8).jpeg",
  "assets/work/P%20(56).jpeg",
  "assets/work/P%20(24).jpeg"
];

let aboutIndex = 0;

const aboutPhoto = document.querySelector(".about img");

if (aboutPhoto && aboutSlides.length > 1) {

  setInterval(() => {

    aboutIndex = (aboutIndex + 1) % aboutSlides.length;

    aboutPhoto.src = aboutSlides[aboutIndex];

  }, 2500);

}

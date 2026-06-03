/* ==============================
   CURSEUR PREMIUM
============================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

mouseX = e.clientX;
mouseY = e.clientY;

});

function animateCursor() {

currentX += (mouseX - currentX) * 0.35;
currentY += (mouseY - currentY) * 0.35;

cursor.style.left = currentX + "px";
cursor.style.top = currentY + "px";

requestAnimationFrame(animateCursor);

}

animateCursor();

const hoverElements = document.querySelectorAll(
"a, button, .project-card, .timeline-card, .main-button"
);

hoverElements.forEach((element) => {

element.addEventListener("mouseenter", () => {
cursor.classList.add("big");
});

element.addEventListener("mouseleave", () => {
cursor.classList.remove("big");
});

});

}


/* ==============================
   ANIMATIONS AU SCROLL
============================== */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

reveals.forEach((element) => {

const windowHeight = window.innerHeight;
const revealTop = element.getBoundingClientRect().top;

if (revealTop < windowHeight - 80) {
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


/* ==============================
   NAVBAR QUI DISPARAÎT AU SCROLL
============================== */

const navbar = document.querySelector(".navbar");

let lastScroll = 0;

if (navbar) {

window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset;

if (currentScroll > lastScroll && currentScroll > 180) {
navbar.classList.add("hidden");
} else {
navbar.classList.remove("hidden");
}

lastScroll = currentScroll;

});

}


/* ==============================
   MENU BURGER MOBILE
============================== */

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {

burger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

}


/* ==============================
   SCROLL PROGRESS BAR
============================== */

const progressBar = document.createElement("div");

progressBar.classList.add("scroll-progress");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});


/* ==============================
   POP-UP PROJETS
============================== */

const projects = {

kream: {
title: "KREAM",
subtitle: "La crème de la crème.",
media: "images/kream.png",
type: "image",
context: "Séminaire d’influence autour de la création d’une agence fictive spécialisée dans le marketing d’influence food.",
objectif: "Imaginer une agence cohérente, reconnaissable et capable de proposer des activations social media engageantes.",
realisation: "Définition du positionnement, des valeurs, de la stratégie de contenu et création de formats social media. J’ai également incarné l’un des influenceurs du projet.",
competences: ["Marketing d’influence", "Stratégie social media", "Création de contenu", "Branding"]
},

needly: {
title: "NEEDLY",
subtitle: "Une application solidaire contre le gaspillage alimentaire.",
media: "images/needly.png",
type: "image",
context: "Projet d’invention d’un service marketing autour d’un enjeu sociétal : le gaspillage alimentaire.",
objectif: "Créer une solution simple et moderne permettant aux particuliers de donner leurs surplus alimentaires à proximité.",
realisation: "Conception du concept d’application mobile avec publication des produits, géolocalisation, réservation, récupération et système de notation.",
competences: ["Innovation", "Marketing responsable", "UX thinking", "Stratégie de service"]
},

umaine: {
title: "UMAINE",
subtitle: "Battle créative.",
media: "images/umaine.png",
type: "image",
context: "Battle créative autour du lancement d’une marque émergente ciblant les femmes de 45 à 60 ans.",
objectif: "Imaginer une campagne impactante capable de capter l’attention, créer de l’engagement et moderniser l’image de la marque.",
realisation: "Conception d’une campagne de lancement, réflexion stratégique, proposition créative et travail d’équipe dans un cadre compétitif.",
competences: ["Stratégie", "Créativité", "Positionnement", "Travail d’équipe"]
},

bliss: {
title: "BLISS FESTIVAL",
subtitle: "Trouve ton yoga.",
media: "images/bliss.png",
type: "image",
context: "Projet de communication autour du Bliss Yoga Festival.",
objectif: "Modifier la perception du yoga et casser les idées reçues pour rendre l’événement plus moderne et inclusif.",
realisation: "Création du concept 'Trouve ton yoga', une invitation à découvrir une pratique adaptée à chaque rythme et mode de vie.",
competences: ["Communication événementielle", "Concept créatif", "Stratégie de cible", "Inclusivité"]
},

nomads: {
title: "NOMADS OCEAN CARE",
subtitle: "Communication responsable.",
media: "images/nomads.png",
type: "image",
context: "Projet RSE Lab Day pour le fonds de dotation Nomads Ocean Care.",
objectif: "Créer une campagne destinée aux entreprises afin de les encourager à s’engager dans la protection des océans.",
realisation: "Construction d’une campagne de communication responsable, travail collaboratif et création d’un message engagé autour d’une cause environnementale.",
competences: ["RSE", "Communication responsable", "Travail collaboratif", "Créativité engagée"]
},

vermeil: {
title: "VERMEIL",
subtitle: "Restaurant de vin et de viande rouge.",
media: "images/vermeil.png",
type: "image",
context: "Projet de création complète d’un restaurant fictif.",
objectif: "Imaginer une identité de marque cohérente en prenant en compte les concurrents, la localisation, les menus et l’image de marque.",
realisation: "Création du concept Vermeil, réflexion branding, menus, contenus visuels et mockups.",
competences: ["Branding", "Benchmark", "Création visuelle", "Stratégie de marque"]
},

ia: {
title: "IA LAB DAY",
subtitle: "Sensibilisation aux fake news.",
media: "images/ia-lab-day.png",
type: "image",
context: "Projet réalisé dans le cadre d’un IA Lab Day consacré aux enjeux de l’intelligence artificielle et de la désinformation.",
objectif: "Sensibiliser le public aux fake news en montrant à quel point une fausse information peut paraître crédible lorsqu’elle est bien mise en scène.",
realisation: "Nous avons créé une vidéo diffusant volontairement de fausses informations avant de révéler l’objectif pédagogique du projet. Cette expérience m’a permis de travailler sur le storytelling, la création audiovisuelle et la réflexion autour de la fiabilité de l’information à l’ère de l’IA.",
competences: [
"Storytelling",
"Création audiovisuelle",
"Intelligence artificielle",
"Esprit critique",
"Communication digitale"
],
youtube: "https://youtube.com/shorts/P2tQ6eOTojA?feature=share"
},

holoflash: {
title: "HOLOFLASH",
subtitle: "Le média holographique du matin.",
media: "images/holoflash.png",
type: "image",
context: "Projet de création d’un nouveau média innovant.",
objectif: "Imaginer un support d’information moderne, rapide et fiable pour accompagner les utilisateurs chaque matin.",
realisation: "Création du concept Holoflash : un socle projetant un hologramme avec cinq informations vérifiées et la possibilité de poser des questions d’actualité.",
competences: ["Innovation média", "Concept créatif", "Veille informationnelle", "Branding"]
},

podcast: {
title: "MATTE MOI ÇA !",
subtitle: "Le podcast sur l’art.",
media: "images/podcast.png",
type: "image",
context: "Création d’un podcast culturel à destination d’une cible jeune.",
objectif: "Rendre l’art plus accessible, drôle, rapide et interactif.",
realisation: "Conception du format : table ronde de 10 à 15 minutes, un invité, un sujet d’art, un débat et des rubriques dynamiques comme 'génie ou arnaque ?'.",
competences: ["Podcast", "Culture", "Création éditoriale", "Storytelling"]
},

ikea: {
title: "IKEA",
subtitle: "Les pièces iconiques ressuscitent.",
media: "images/ikea.png",
type: "image",
context: "Exercice de communiqué de presse autour d’IKEA.",
objectif: "Imaginer une annonce presse autour du retour de pièces iconiques de la marque.",
realisation: "Rédaction d’un communiqué de presse structuré, clair et adapté au ton de la marque.",
competences: ["Relations presse", "Rédaction", "Brand content", "Communication corporate"]
},

patinage: {
title: "TU SAVAIS ÇA DE MOI ?",
subtitle: "Un récit personnel en vidéo.",
media: "images/patinage-video.png",
type: "image",
context: "Projet personnel retraçant mon parcours dans le patinage artistique.",
objectif: "Partager une partie importante de mon histoire et mettre en lumière les valeurs développées grâce à ce sport.",
realisation: "Cette vidéo retrace plusieurs années de pratique du patinage artistique, une discipline qui m'a appris la rigueur, la persévérance, l'esprit d'équipe et le dépassement de soi. À travers ce projet, je souhaitais raconter une histoire personnelle tout en mettant en avant un univers qui a profondément contribué à construire la personne que je suis aujourd'hui.",
competences: [
"Storytelling",
"Montage vidéo",
"Créativité",
"Communication visuelle"
],
youtube: "https://youtu.be/xfW94O7vlds"
}

};


function openProject(projectName) {

const project = projects[projectName];

const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");

if (!project || !modal || !modalBody) return;

let mediaHTML = "";

if (project.type === "video") {

mediaHTML = `
<video controls>
<source src="${project.media}" type="video/mp4">
</video>
`;

} else {

mediaHTML = `
<img src="${project.media}" alt="${project.title}">
`;

}

modalBody.innerHTML = `
${mediaHTML}

<h2>${project.title}</h2>

<h3>${project.subtitle}</h3>

<p><strong>Contexte :</strong> ${project.context}</p>

<p><strong>Objectif :</strong> ${project.objectif}</p>

<p><strong>Réalisation :</strong> ${project.realisation}</p>

<ul>
${project.competences.map(item => `<li>${item}</li>`).join("")}
</ul>

${
project.youtube
?
`
<a
href="${project.youtube}"
target="_blank"
class="main-button"
style="margin-top:25px;">
Voir la vidéo
</a>
`
:
""
}
`;

modal.classList.add("active");

}

function closeProject() {

const modal = document.getElementById("project-modal");

if (!modal) return;

/* Arrêt de toutes les vidéos */

const videos = modal.querySelectorAll("video");

videos.forEach((video) => {

video.pause();
video.currentTime = 0;

});

/* Fermeture */

modal.classList.remove("active");

}


/* ==============================
   POP-UP EXPERIENCES
============================== */

const experiences = {

capa: {
title: "Chargée de communication",
subtitle: "Clermont Auvergne Patinage Artistique",
period: "Depuis septembre 2024",
missions: [
"Gestion et animation des réseaux sociaux de l’équipe de ballet sur glace Les Magmatiques.",
"Création de contenus pour les événements, compétitions et temps forts du club.",
"Valorisation de l’image de l’équipe et du club à travers une communication digitale cohérente."
]
},

talent: {
title: "Assistante Talent Manager",
subtitle: "Just GO Agency",
period: "Janvier 2026 – Mars 2026",
missions: [
"Contribution à la gestion de projets internes.",
"Création, structuration et mise à jour de tableaux de suivi.",
"Suivi et coordination de collaborations rémunérées et non rémunérées.",
"Accompagnement personnalisé des créateurs de contenus.",
"Respect des briefs et des délais."
]
},

community: {
title: "Assistante Community Manager",
subtitle: "Just GO Agency",
period: "Avril 2025 – Juin 2025",
missions: [
"Collecte, analyse et mise à jour des statistiques de performance des talents.",
"Actualisation des media kits.",
"Réalisation du reporting de la newsletter.",
"Veille stratégique des tendances digitales.",
"Conception graphique et rédaction de contenus pour Instagram, Pinterest et LinkedIn."
]
},

bde: {
title: "Présidente du BDE",
subtitle: "Groupe EDH Bordeaux",
period: "Octobre 2025 – Juin 2026",
missions: [
"Définition de la vision stratégique du BDE.",
"Management et coordination d’une équipe pluridisciplinaire.",
"Organisation et supervision d’événements étudiants.",
"Représentation officielle des étudiants.",
"Développement et négociation de partenariats.",
"Supervision de la stratégie de communication du BDE."
]
},

patinage: {
title: "Monitrice de patinage artistique",
subtitle: "Clermont Auvergne Patinage Artistique",
period: "Septembre 2020 – Juin 2024",
missions: [
"Pédagogie et adaptation selon l’âge et le niveau.",
"Gestion et motivation de groupes d’enfants.",
"Animation de séances ludiques et sécurisées.",
"Suivi des progrès individuels et collectifs."
]
}

};


function openExperience(expName) {

const exp = experiences[expName];

const modal = document.getElementById("experience-modal");
const body = document.getElementById("experience-body");

if (!exp || !modal || !body) return;

body.innerHTML = `
<h2>${exp.title}</h2>
<h3>${exp.subtitle}</h3>
<p><strong>Période :</strong> ${exp.period}</p>

<ul>
${exp.missions.map(item => `<li>${item}</li>`).join("")}
</ul>
`;

modal.classList.add("active");

}

function closeExperience() {

const modal = document.getElementById("experience-modal");

if (!modal) return;

/* Arrêt des éventuelles vidéos */

const videos = modal.querySelectorAll("video");

videos.forEach((video) => {

video.pause();

video.currentTime = 0;

});

/* Fermeture */

modal.classList.remove("active");

}


/* ==============================
   FERMER MODAL EN CLIQUANT DERRIÈRE
============================== */

document.querySelectorAll(".project-modal").forEach((modal) => {

modal.addEventListener("click", (e) => {

if (e.target === modal) {

/* Arrêt de toutes les vidéos dans la pop-up */

const videos = modal.querySelectorAll("video");

videos.forEach((video) => {

video.pause();

video.currentTime = 0;

});

/* Fermeture de la pop-up */

modal.classList.remove("active");

}

});

});
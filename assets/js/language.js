const aboutLinkNav = document.getElementById("about-link-nav");
const aboutLinkMenu = document.getElementById("about-link-menu");
const skillsLinkNav = document.getElementById("skills-link-nav");
const skillsLinkMenu = document.getElementById("skills-link-menu");
const projectsLinkNav = document.getElementById("projects-link-nav");
const projectsLinkMenu = document.getElementById("projects-link-menu");
const contactLinkNav = document.getElementById("contact-link-nav");
const contactLinkMenu = document.getElementById("contact-link-menu");
const skillsHeader = document.getElementById("skills-header");
const projectsHeader = document.getElementById("projects-header");
const bioTXT = document.getElementById("bio-txt");
const htmlTXT = document.getElementById("html-txt");
const cssTXT = document.getElementById("css-txt");
const bootstrapTXT = document.getElementById("bootstrap-txt");
const jsTXT = document.getElementById("js-txt");
const englishTXT = document.getElementById("english-txt");
const currentSiteTXT = document.getElementById("current-site-txt");
const contactName = document.getElementById("contact-name");
const contactMSG = document.getElementById("contact-msg");

// language buttons
const langEN = document.getElementById("lang-en");
const langIT = document.getElementById("lang-it");
langEN.addEventListener("click", () => onclickLanguageButton("en"));
langIT.addEventListener("click", () => onclickLanguageButton("it"));

let currentLocale = "en";

function switchLang(locale) {
    // TODO: maybe use JSON instead
    switch (locale) {
        case "en":
            aboutLinkMenu.innerHTML = "About";
            aboutLinkNav.innerHTML = aboutLinkMenu.innerHTML;
            skillsLinkMenu.innerHTML = "Skills";
            skillsLinkNav.innerHTML = skillsLinkMenu.innerHTML;
            projectsLinkMenu.innerHTML = "Projects";
            projectsLinkNav.innerHTML = projectsLinkMenu.innerHTML;
            contactLinkMenu.innerHTML = "Contacts";
            contactLinkNav.innerHTML = contactLinkMenu.innerHTML;
            skillsHeader.innerHTML = skillsLinkMenu.innerHTML.toUpperCase();
            projectsHeader.innerHTML = projectsLinkMenu.innerHTML.toUpperCase();
            bioTXT.innerHTML = "I'm Walter Roveda, an aspiring full stack web developer and student at the University of Pavia. Passioned about coding and classical hats, I value the elegance of simple code and ease of use for all my projects, while still maintaining an enticing user experience.";
            htmlTXT.innerHTML = "Able to build well structured sites.";
            cssTXT.innerHTML = "Able to create flexible and responsive UI, with base knowledge on creating animations.";
            bootstrapTXT.innerHTML = "Base knowledge on quickly creating simple and responsive sites using the toolkit.";
            jsTXT.innerHTML = "Base knowledge of JavaScript.";
            englishTXT.innerHTML = "Certified by the Cambrige Assessment at C1 CEFR level for the english language."
            currentSiteTXT.innerHTML = "site [you are already here]";
            contactName.innerHTML = "Name";
            contactMSG.innerHTML = "Message";
            break;

        case "it":
            aboutLinkMenu.innerHTML = "Chi&nbsp;Sono";
            aboutLinkNav.innerHTML = aboutLinkMenu.innerHTML;
            skillsLinkMenu.innerHTML = "Abilit&agrave;";
            skillsLinkNav.innerHTML = skillsLinkMenu.innerHTML;
            projectsLinkMenu.innerHTML = "Progetti";
            projectsLinkNav.innerHTML = projectsLinkMenu.innerHTML;
            contactLinkMenu.innerHTML = "Contatti";
            contactLinkNav.innerHTML = contactLinkMenu.innerHTML;
            skillsHeader.innerHTML = skillsLinkMenu.innerHTML.toUpperCase();
            projectsHeader.innerHTML = projectsLinkMenu.innerHTML.toUpperCase();
            bioTXT.innerHTML = "Sono Walter Roveda, un aspirante full stack web developer e studente all'Universit&agrave; di Pavia. Appassionato di programmazione e cappelli classici, mi piace valorizzare l'eleganza di un codice semplice e la facilit&agrave; di utilizzo in tutti i miei progetti, mantenendo contemporaneamente un'esperienza utente allettante.";
            htmlTXT.innerHTML = "Abile a sviluppare siti ben strutturati.";
            cssTXT.innerHTML = "Abile a creare un'interfaccia utente flessibile e reattiva, con conoscenza base su come creare animazioni.";
            bootstrapTXT.innerHTML = "Conoscenza base su creare velocemente siti semplici e reattivi utilizzando il toolkit.";
            jsTXT.innerHTML = "Conoscenza base di JavaScript.";
            englishTXT.innerHTML = "Certificato dal Cambrige Assessment al livello C1 CEFR per la lingua inglese."
            currentSiteTXT.innerHTML = "site [sei gi&agrave; qui]";
            contactName.innerHTML = "Nome";
            contactMSG.innerHTML = "Messaggio";
            break;
    }
}

function onclickLanguageButton(locale) {
    if (currentLocale === locale) { return; }

    // resets buttons css
    langEN.style.color = "#f3eee1";
    langIT.style.color = "#f3eee1";

    switch (locale) {
        case "en":
            langEN.style.color = "#F4B752";

            switchLang("en");
            break;

        case "it":
            langIT.style.color = "#F4B752";

            switchLang("it");
            break;
    }

    currentLocale = locale;
}

// sets defaults
langEN.style.color = "#F4B752";
switchLang(currentLocale);

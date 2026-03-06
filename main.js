function applyTheme() {
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    
    let currentThemeSetting = localStorageTheme || (systemSettingDark.matches ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", currentThemeSetting);
}
document.addEventListener("DOMContentLoaded", applyTheme);

const button = document.querySelector("[data-theme-toggle]");
button.addEventListener("click", () => {
    let currentThemeSetting = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    
    localStorage.setItem("theme", currentThemeSetting);
    document.documentElement.setAttribute("data-theme", currentThemeSetting);
    
    const newCta = currentThemeSetting === "dark" ? "🌙➡️☀️" : "☀️➡️🌙";
    button.innerText = newCta;
});

function linkHome() {
    window.location.href = "https://notes-online.surge.sh/index.html"
};

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    body.classList.add("no-transition");
    setTimeout(() => {
        body.classList.remove("no-transition");
    }, 10);
});


document.addEventListener("DOMContentLoaded", () => {
let link = []
const jsonUrl = "#";
const notesCardTemplate = document.querySelector("[data-notes-template]")
const notesCardContainer = document.querySelector("[data-note-cards-container]")
const searchInput = document.querySelector("[data-search]")
fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    link = data.linkbtn.map(linkbtn => {
      const anchor = notesCardTemplate.content.cloneNode(true).children[0]
      const card = anchor.querySelector(".card")
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      document.getElementById("current-json-link").textContent = `Currently running API from ${jsonUrl}`;
      header.textContent = linkbtn.name
      body.textContent = linkbtn.url
      anchor.href = linkbtn.url
      anchor.target = "_blank"
      notesCardContainer.append(anchor)
      return { name: linkbtn.name, url: linkbtn.url, element: anchor }
    })
  })
  .catch(err => console.error("JSON fetch failed:", err))
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  link.forEach(link => {
    const isVisible =
      link.name.toLowerCase().includes(value)
    link.element.classList.toggle("hide", !isVisible)
  })
})
console.log(notesCardTemplate, notesCardContainer, searchInput);
});

    function toggleDiv() {
      const div = document.getElementById("toggleDiv");
      div.classList.toggle("hide");
    }



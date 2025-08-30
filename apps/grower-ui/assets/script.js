// Define your modules here. Each will render as a card with a link.
const modules = [
  {
    id: "playground",
    title: "UX Playground",
    path: "modules/playground/",
    description: "Click and search to fire sandbox events for GTM/GA4 validation.",
    events: ["cta_click", "nav_search", "form_submit", "page_view"],
  },
  {
    id: "signal",
    title: "The Signal",
    path: "modules/signal/",
    description: "A focused surface to validate event taxonomy and naming.",
    events: ["cta_click", "page_view"],
  },
  // Add more modules here as you expand, e.g. Fitness RoutineIQ
];

function renderModules() {
  const container = document.getElementById("modules");
  container.className = "module-list";

  modules.forEach((m) => {
    const el = document.createElement("div");
    el.className = "module";
    el.innerHTML = `
      <div class="row">
        <h3>${m.title}</h3>
        <a class="btn ghost" href="${m.path}">Open →</a>
      </div>
      <p>${m.description}</p>
      <p><code>${m.events.join(", ")}</code></p>
    `;
    container.appendChild(el);
  });
}

document.addEventListener("DOMContentLoaded", renderModules);

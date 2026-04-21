const bootLines = [
  "Booting personal environment...",
  "Loading developer profile...",
  "Initializing interface modules...",
  "Loading selected projects...",
  "Boot sequence complete."
];

function runBootSequence(onComplete) {
  const output = document.getElementById("terminal-output");
  if (!output) return;

  let index = 0;

  function printNextLine() {
    if (index >= bootLines.length) {
      setTimeout(() => {
        onComplete();
      }, 700);
      return;
    }

    const line = document.createElement("p");
    line.textContent = bootLines[index];
    output.appendChild(line);
    index++;

    setTimeout(printNextLine, 900);
  }

  printNextLine();
}

function revealPortfolio() {
  const portfolio = document.getElementById("portfolio");
  if (portfolio) {
    portfolio.classList.remove("hidden");
  }
}

function morphBootToHeroPanel() {
  const bootScreen = document.getElementById("boot-screen");
  const bootTerminal = document.getElementById("boot-terminal");
  const heroPanel = document.getElementById("hero-panel");
  const terminalBody = bootTerminal?.querySelector(".terminal-body");

  if (!bootScreen || !bootTerminal || !heroPanel) {
    revealPortfolio();
    return;
  }

  revealPortfolio();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const bootRect = bootTerminal.getBoundingClientRect();
      const heroRect = heroPanel.getBoundingClientRect();

      const offsetX = 0;
      const offsetY = -4;

      const deltaX = heroRect.left - bootRect.left + offsetX;
      const deltaY = heroRect.top - bootRect.top + offsetY;

      if (terminalBody) {
        terminalBody.classList.add("fade-out");
      }

      bootTerminal.classList.add("is-morphing");
      bootTerminal.style.width = `${heroRect.width}px`;
      bootTerminal.style.height = `${heroRect.height}px`;
      bootTerminal.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      setTimeout(() => {
        heroPanel.classList.add("panel-ready");
      }, 420);

      setTimeout(() => {
        bootTerminal.style.opacity = "0";
      }, 680);

      setTimeout(() => {
        bootScreen.classList.add("boot-fade");
      }, 800);

      setTimeout(() => {
        bootScreen.remove();
      }, 1280);
    });
  });
}
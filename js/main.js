document.addEventListener("DOMContentLoaded", async () => {
  setupNav();
  setupSmoothScroll();
  await loadProjects();
  setupAnimations();

  runBootSequence(() => {
    morphBootToHeroPanel();
  });
});
// Simple enhancement: alert on rainy day closure
document.addEventListener("DOMContentLoaded", () => {
  const rainSection = document.querySelector(".info:nth-of-type(5)");
  if (rainSection) {
    rainSection.addEventListener("click", () => {
      alert("Le parc est fermé en cas de pluie. Pensez à vérifier la météo !");
    });
  }
});

const currentPath =
  window.location.pathname === "/" ? "/index.html" : window.location.pathname;
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  // Ignore les liens externes (commencent par http ou #) ou ceux avec la classe "facebook"
  if (
    href.startsWith("http") ||
    href.startsWith("#") ||
    link.classList.contains("facebook")
  ) {
    return;
  }

  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

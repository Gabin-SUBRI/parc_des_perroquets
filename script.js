// Simple enhancement: alert on rainy day closure
document.addEventListener("DOMContentLoaded", () => {
  const rainSection = document.querySelector(".info:nth-of-type(5)");
  rainSection.addEventListener("click", () => {
    alert("Le parc est fermé en cas de pluie. Pensez à vérifier la météo !");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const share = document.querySelector(".share-icon");
  const socialLinks = document.querySelector(".share-social-links");
  const articleFooter = document.querySelector(".profile");

  share.addEventListener("click", () => {
    socialLinks.classList.toggle("show");
    articleFooter.classList.toggle("hidden");
  });
});

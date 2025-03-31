// const share = document.querySelector(".share");
// const socialMedia = document.querySelector(".social-media");

// share.addEventListener("click", function () {
//    socialMedia.classList.toggle("visible"); // Adds or deletes the “visible” class"
// });

// share.addEventListener("click", function () {
//    share.classList.toggle("active"); // Adds or deletes “active” class"
// });

// document.addEventListener("DOMContentLoaded", () => {
// //   const shareBtn = document.querySelector(".share-btn");
//   const shareBtnMobile = document.querySelector(".share-btn-mobile");
//   const sharePopup = document.querySelector(".share-popup");
// //   const articleFooter = document.querySelector(".article-footer");
//   const articleFooterMobile = document.querySelector(".article-footer-mobile");

//   shareBtn.addEventListener("click", () => {
//     sharePopup.classList.toggle("show-popup");
//     // articleFooter.classList.toggle("hidden");
//     articleFooterMobile.classList.toggle("hidden");
//     shareBtn.classList.toggle("clicked");
//     shareBtnMobile.classList.toggle("clicked");
//   });
//   shareBtnMobile.addEventListener("click", () => {
//     sharePopup.classList.toggle("show-popup");
//     articleFooter.classList.toggle("hidden");
//     articleFooterMobile.classList.toggle("hidden");
//     shareBtn.classList.toggle("clicked");
//     shareBtnMobile.classList.toggle("clicked");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const share = document.querySelector(".share-icon");
  const socialLinks = document.querySelector(".share-social-links");
  const articleFooter = document.querySelector(".profile");

  share.addEventListener("click", () => {
    socialLinks.classList.toggle("show");
    articleFooter.classList.toggle("hidden");
  });
});

const mainContent = document.querySelector(".main");

const companyProfileContent = document
  .querySelector("[data-company-profile-temp]")
  .content.cloneNode(true)
  .querySelector(".company-profile-wrapper");
const productCatalogueContent = document
  .querySelector("[data-catalogue-temp]")
  .content.cloneNode(true)
  .querySelector(".wrappper");
const registerLoginContent = document
  .querySelector("[data-register-login]")
  .content.cloneNode(true)
  .querySelector(".main-section");
const contactUsContent = document
  .querySelector("[data-contact-us]")
  .content.cloneNode(true)
  .querySelector(".main-section");
const tlmpContent = document
  .querySelector("[data-tlmp]")
  .content.cloneNode(true)
  .querySelector(".main-section");
const homecontent = document
  .querySelector("[data-home]")
  .content.cloneNode(true)
  .querySelector(".main-section");

const logoLink = document.querySelector(".main-content-logo-image")
const companyProfileLink = document.querySelector(".company-profile-link");
const productCatalogueLink = document.querySelector(".product-catalogue-link");
const registerLoginLink = document.querySelector(".register-link");
const contactUsLink = document.querySelector(".contact-link");
const tlmpLink = document.querySelector(".tlmp-link");

let mobileOpen = false;
const mobileSidebarLinks = document.querySelector(
  ".mobile-navigations-wrapper"
);

function changeMainData(data) {
  mainContent.innerHTML = "";
  mainContent.append(data);
}

function closeMobileSidebar(){
  mobileSidebarLinks.style.transform = "translateX(-102%)";
}

logoLink.addEventListener("click", () => {
  changeMainData(homecontent)
})

companyProfileLink.addEventListener("click", () => {
  changeMainData(companyProfileContent);
});

productCatalogueLink.addEventListener("click", () => {
  changeMainData(productCatalogueContent);
});

registerLoginLink.addEventListener("click", () => {
  changeMainData(registerLoginContent);
});

contactUsLink.addEventListener("click", () => {
  changeMainData(contactUsContent);
});

tlmpLink.addEventListener("click", () => {
  changeMainData(tlmpContent);
});

document.querySelector(".mobile-toggle-btn").addEventListener("click", () => {
  mobileSidebarLinks.style.transform = "translateX(0%)";
});

document.querySelector(".mobile-nav-header i").addEventListener("click", () => {
  mobileSidebarLinks.style.transform = "translateX(-102%)";
});

document.querySelector(".home-mobile-link").addEventListener("click", () => {
  changeMainData(homecontent);
  closeMobileSidebar();
});

document.querySelector(".company-profile-mobile-link").addEventListener("click", () => {
  changeMainData(companyProfileContent);
  closeMobileSidebar();
});

document.querySelector(".product-catalogue-mobile-link").addEventListener("click", () => {
  changeMainData(productCatalogueContent);
  closeMobileSidebar();
});

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

const companyProfileLink = document.querySelector(".company-profile-link");
const productCatalogueLink = document.querySelector(".product-catalogue-link");
const registerLoginLink = document.querySelector(".register-link");
const contactUsLink = document.querySelector(".contact-link");
const tlmpLink = document.querySelector(".tlmp-link");

companyProfileLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.append(companyProfileContent);
});

productCatalogueLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.append(productCatalogueContent);
});

registerLoginLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.append(registerLoginContent);
});

contactUsLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.append(contactUsContent);
});

tlmpLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.append(tlmpContent);
});

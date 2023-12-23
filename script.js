const mainContent = document.querySelector(".main");
const companyProfileContent = document
  .querySelector("[data-company-profile-temp]")
  .content.cloneNode(true)
  .querySelector(".company-profile-wrapper");
const productCatalogueContent = document
  .querySelector("[data-catalogue-temp]")
  .content.cloneNode(true)
  .querySelector(".wrappper");

const companyProfileLink = document.querySelector(".company-profile-link");
const productCatalogueLink = document.querySelector('.product-catalogue-link')

companyProfileLink.addEventListener("click", () => {
  mainContent.innerHTML = "";
  mainContent.append(companyProfileContent);
});

productCatalogueLink.addEventListener("click", () => {
    mainContent.innerHTML = "";
    mainContent.append(productCatalogueContent);
  });

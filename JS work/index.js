const elSelectLanguage = document.querySelector(".js-language-select");
const elHeading1 = document.querySelector(".js-heading1");
const elHeading2 = document.querySelector(".js-heading2");

const siteLanguage =  window.localStorage.getItem("Language");

const words = {
    en: {
        title1: "Hello",
        title2: "Good bye", 

    },
    uz: {
        title1: "Salom",
        title2: "Xayr", 
    }
};

function changeLanguage(language = "uz") {
    elHeading1.textContent = words[language].title1;
    elHeading2.textContent = words[language].title2;
}

const handleChangeLanguage = (evt) => {
    let lang = evt.target.value;
    window.localStorage.setItem("Language", lang);
    changeLanguage(lang);
}

elSelectLanguage.addEventListener("change", handleChangeLanguage);

if (siteLanguage) {
    changeLanguage(siteLanguage);
} else {
    changeLanguage();
}
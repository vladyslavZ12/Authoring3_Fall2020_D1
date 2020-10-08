// import your packages here
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component-specific stuff
    let userSection = document.querySelector(".user-section");

    debugger;

    // select our user elements and load the content
    

    userSection[1].textContent = Team["Justin"].name;
    userSection[2].textContent = Team["Justin"].role;
    userSection[3].textContent = Team["Justin"].nickname;
})();
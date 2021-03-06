import animation from "./components/animate";
import scrollButton from "./components/scrollButton";
import setNavListeners from "./components/setNavListeners";
import burgerMenu from "./components/burgerMenu";
import form from "./components/form/form";

export default function() {
    animation();
    scrollButton();
    burgerMenu();
    
    let menuNav = document.querySelector(".menu");
    setNavListeners(menuNav);

    form();
}

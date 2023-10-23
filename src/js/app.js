// import { consoleInfo, isWebp() } from './config/functions.js';
// import { hasErrors } from './modules/forms.js';
import { useSpoiler } from "./modules/spoilers.js";
// import { initTabs } from './modules/tabs.js';
// import { initSliders } from './modules/sliders.js';
import { useHeader } from "./modules/header.js";
// import { initModals, openModalIf } from './modules/modals.js';
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import AOS from 'aos';
// import Rellax from "rellax";
// import fslightbox from 'fslightbox';
// import Ellipsis from 'ellipsis.js';
// import Choices from 'choices.js';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import noUiSlider from 'nouislider';
// import MicroModal from 'micromodal';

// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  useDynamicAdapt("max");
  useHeader();
  useSpoiler();

  /*
    map
  */
    let map;

    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");
    
      map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
    
    initMap();
}

document.addEventListener("DOMContentLoaded", app);

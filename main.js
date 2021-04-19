// mostrare / nascondere il menu principale

// metto tutto il mio codice nella funzione $(document).ready...
$(document).ready(function () {

  // REFERENCES /////////////////////////////////////

  // identifico e registro in una var la classe dell'elemento che contiene il menu hamburger
  var menu = $(".hamburger-menu");

  // identifico e registro in una var la classe dell'elemento che dovrebbe aprire il menu hamburger
  var openHamburgerMenu = $(".header-right > a");

  // identifico e registro in una var la classe dell'elemento che dovrebbe chiudere il menu hamburger
  var closeHamburgerMenu = $(".close");

  // END REFERENCES /////////////////////////////////////


  // EVENTS ///////////////////////////////////

  // al click su openHamburgerMenu apro il menu
  openHamburgerMenu.click(function () {
    console.log("apro il menu");
    menu.show();
  });

   // al click su closeHamburgerMenu chiudo il menu
  closeHamburgerMenu.click(function () {
    console.log("chiudo il menu");
    menu.hide();
  })
  // END EVENTS ///////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////// OPTION 2 CON FUZNIONI //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

   // REFERENCES /////////////////////////////////////

  // identifico e registro in una var la classe dell'elemento che contiene il menu hamburger
  var menu = $(".hamburger-menu");

  // identifico e registro in una var la classe dell'elemento che dovrebbe aprire il menu hamburger
  var openHamburgerMenu = $(".header-right > a");

  // identifico e registro in una var la classe dell'elemento che dovrebbe chiudere il menu hamburger
  var closeHamburgerMenu = $(".close");

  // END REFERENCES /////////////////////////////////////


  // EVENTS ///////////////////////////////////

  // al click su openHamburgerMenu apro il menu
  openHamburgerMenu.click(openMenu);

   // al click su closeHamburgerMenu chiudo il menu
  closeHamburgerMenu.click(closeMenu);

  // END EVENTS ///////////////////////////////


  // FUNCTIONS ///////////////////////////////////

  // Funzioni apri e chiudi menu
  function openMenu (){
    menu.show();
    console.log("apro il menu");
  }

  function closeMenu (){
    menu.hide();
    console.log("chiudo il menu");
  }

  // END FUNCTIONS ///////////////////////////////////
});
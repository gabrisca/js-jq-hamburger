// mostrare / nascondere il menu principale

// metto tutto il mio codice nella funzione $(document).ready...
$(document).ready(function () {

  // identifico e registro in una var la classe dell'elemento che contiene il menu hamburger
  var menu = $(".hamburger-menu");

  // identifico e registro in una var la classe dell'elemento che dovrebbe aprire il menu hamburger
  var openHamburgerMenu = $(".header-right > a");

  // identifico e registro in una var la classe dell'elemento che dovrebbe chiudere il menu hamburger
  var closeHamburgerMenu = $(".close");

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

});
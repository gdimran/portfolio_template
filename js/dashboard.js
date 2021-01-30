const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('scrollbar'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const menu = mdc.menu.MDCMenu.attachTo(document.querySelector('#actinfo'));
const menuMsg = mdc.menu.MDCMenu.attachTo(document.querySelector('#message'));
menu.open = false;
menuMsg.open = false;

const actBtn = document.querySelector('#account');
actBtn.addEventListener('click', () => {
    menu.open = !menu.open;
});

const msgActionBtn = document.querySelector('#msgbtn');
msgActionBtn.addEventListener('click', () => {
    menuMsg.open = !menuMsg.open;
});

//const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));


const dialogueAction = document.querySelector('#dialogue-action');
dialogueAction.addEventListener("click", () => {
    dialog.open();
    dialog.autoStackButtons =false;
    dialog.escapeKeyAction ="";
    dialog.scrimClickAction ="";

});

const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
dialog.listen('MDCDialog:opened', function () {
    // Assuming contentElement references a common parent element with the rest of the page's content
});

const dialogElements = [].slice.call(document.querySelectorAll('.mdc-dialog'));
dialogElements.forEach((dialogEl) => {
  mdc.dialog.MDCDialog.attachTo(dialogEl);
});

const protfolioAction = document.querySelector('#protfolio-details-action');
protfolioAction.addEventListener("click", () => {
  protfolioDialog.open();
  protfolioDialog.autoStackButtons =false;
  protfolioDialog.escapeKeyAction ="";
  protfolioDialog.scrimClickAction ="";

});

const protfolioDialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.protfolio_details'));
protfolioDialog.listen('MDCDialog:opened', function () {
    // Assuming contentElement references a common parent element with the rest of the page's content
    
});



const textFiledElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFiledElements.forEach((textFieldEl) => {
    mdc.textField.MDCTextField.attachTo(textFieldEl);
});
//const textField = mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));

const skill_slider =[].slice.call(document.querySelectorAll('.mdc-slider'));
skill_slider.forEach((sliderEl)=>{
    mdc.slider.MDCSlider.attachTo(sliderEl);
});
//const skill_slider = mdc.slider.MDCSlider.attachTo(document.querySelector('.mdc-slider'));


/*-----------filter js------------------*/
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-tab-container");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

jQuery(document).ready(function($) {
  $('.your-class').slick({
    srtl: true
  });
});



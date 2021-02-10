

// const tabBarEl = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
// Array.from(document.querySelectorAll('.mdc-tab')).forEach(
//     tab => tab.addEventListener('MDCTab:interacted', (e) => switchToTab(e.detail.tabId))
//   );
  
//   const switchToTab = (activatedTabId) => {
//     Array.from(document.querySelectorAll('.tab-content')).forEach(tabContent => {
//       tabContent.style.display = tabContent.id.slice(0, -1 * '-content'.length) == activatedTabId.slice(0, -1 * '-tab'.length) ? 'block' : 'none';
//     });
//   }

//const formFieldEl = mdc.formField.MDCFormField.attachTo(document.querySelectorAll('.mdc-form-field'));

const textFiledElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFiledElements.forEach((textFieldEl) => {
    mdc.textField.MDCTextField.attachTo(textFieldEl);
});


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#6200ee";
    document.getElementById("navbar").style.padding = "0px 15px";
    document.getElementById("logo").style.fontSize = "18px";
  } else {
    document.getElementById("navbar").style.background= "transparent";
    document.getElementById("navbar").style.padding = "0px 15px";
    document.getElementById("logo").style.fontSize = "20px";
  }
}

const dialogueAction = document.querySelector('#signIn-action');
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
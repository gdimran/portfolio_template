//const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));

const tabBarEl = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
Array.from(document.querySelectorAll('.mdc-tab')).forEach(
    tab => tab.addEventListener('MDCTab:interacted', (e) => switchToTab(e.detail.tabId))
  );
  
  const switchToTab = (activatedTabId) => {
    Array.from(document.querySelectorAll('.tab-content')).forEach(tabContent => {
      tabContent.style.display = tabContent.id.slice(0, -1 * '-content'.length) == activatedTabId.slice(0, -1 * '-tab'.length) ? 'block' : 'none';
    });
  }

//const formFieldEl = mdc.formField.MDCFormField.attachTo(document.querySelectorAll('.mdc-form-field'));

const textFiledElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFiledElements.forEach((textFieldEl) => {
    mdc.textField.MDCTextField.attachTo(textFieldEl);
});

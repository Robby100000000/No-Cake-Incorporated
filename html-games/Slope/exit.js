// Show "Leave Site?" Dialog Box

window.addEventListener("beforeunload", (event) => {
  // set a truthy value to property returnValue
  event.returnValue = true;
});

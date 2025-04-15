// Show "Leave Site?" Dialog Box

window.addEventListener("beforeunload", (event) => {
  // no weird goguardian with dis
  event.returnValue = true;
});

//IFFE for before page loads
((function () {
  if (!window.location.href.includes("https") && !window.location.href.includes("127.0.0")) {
    window.location.href = "https" + window.location.href.slice(4);
  }
})());

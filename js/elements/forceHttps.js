//IFFE for before page loads
((function () {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }

  if (!document.location.href.includes("https") && !document.location.href.includes("127.0.0")) {
    window.location.href = "https" + window.location.href.slice(4);
  }
})());

var Browser = require("Zombie");
var url = "http://localhost:3000/";
var browser = new Browser();

describe("testing with zombie", function() {

// first test whether our browser is created and site is actually accessible
  it("should have defined headless browser", function(next) {
    expect(typeof browser != "undefined").toBe(true);
    expect(browser instanceof Browser).toBe(true);
    next();
  });

});

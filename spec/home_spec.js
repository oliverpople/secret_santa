var Browser = require("Zombie");
var url = "http://localhost:3000/";
var browser = new Browser();

describe("intialising home page", function() {

// first test whether our browser is created and site is actually accessible
  it("should have defined headless browser", function(next) {
    expect(typeof browser != "undefined").toBe(true);
    expect(browser instanceof Browser).toBe(true);
    next();
  });

  it("should visit the site and have a name form", function(next) {
    browser.visit(url, function(err) {
      expect(browser.success).toBe(true);
      expect(browser.query("input[name='name']")).toBeDefined();
      next();
    });
  });

});

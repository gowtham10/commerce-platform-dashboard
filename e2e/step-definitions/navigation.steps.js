const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until } = require("selenium-webdriver");
const rgb2hex = require("rgb2hex");

Given("I am on the {path} page", async function (path) {
  await this.load();
  await this.driver.get(`${this.appUrl}${path}`);
  await this.driver.wait(until.elementLocated(By.css("[data-test-id='main']")));
});

Then(/^I should see the following links:$/, async function (table) {
  const expectedLinks = table.raw().flat();
  const navLinks = await this.driver.findElements(
    By.css("[data-test-id='nav-links']"),
  );
  navLinks.forEach(async (link) => {
    const linkText = await link.getText();
    assert.ok(expectedLinks.includes(linkText));
  });
});

Then(
  "{string} should be highlighted with color {string} and the rest should be {string}",
  async function (pageDisplayName, highlightColor, defaultColor) {
    const navLinks = await this.driver.findElements(
      By.css("[data-test-id='nav-links']"),
    );
    navLinks.forEach(async (link) => {
      const linkText = await link.getText();
      const color = await link.getCssValue("color");
      const hexColor = rgb2hex(color)?.hex;

      if (linkText === pageDisplayName) {
        assert.equal(hexColor, highlightColor);
      } else {
        assert.equal(hexColor, defaultColor);
      }
    });
  },
);

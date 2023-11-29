const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until } = require("selenium-webdriver");

Given("The loaded {path} page", async function (path) {
  await this.load();
  await this.driver.get(`${this.appUrl}${path}`);
  await this.driver.wait(
    until.elementLocated(By.css("[data-test-id='filters']")),
  );
});

Then(/^I should see the below sections:$/, async function (table) {
  const testIds = table.raw().flat();
  testIds.forEach(async (testId) => {
    const element = await this.driver.findElement(
      By.css(`[data-test-id='${testId}']`),
    );
    assert.ok(element);
  });
});

Then("{int} cards should be displayed", async function (cardLength) {
  const cards = await this.driver.findElements(By.css(`[data-test-id='card']`));
  assert.strictEqual(cards.length, cardLength);
});

Then("{int} metrics should be displayed", async function (metricsLength) {
  const metrics = await this.driver.findElements(By.css(`[data-test-id='metrics']`));
  assert.strictEqual(metrics.length, metricsLength);
});





const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until } = require("selenium-webdriver");

Then(/^I should see the below sections:$/, async function (table) {
  await this.driver.wait(until.elementLocated(By.css("[data-test-id='simple-select']")));
  const testIds = table.raw().flat();
  testIds.forEach(async (testId) => {
    const element = await this.driver.findElement(
      By.css(`[data-test-id='${testId}']`),
    );
    assert.ok(element);
  });
});

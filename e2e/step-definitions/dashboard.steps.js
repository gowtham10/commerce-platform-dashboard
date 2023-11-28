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

When("I update the selected metrics", async function () {
  const selectIndicator = await this.driver.findElement(
    By.css(`[class^=' css-'][class$='indicatorContainer']`),
  );
  let actions = await this.driver.actions({ async: true });
  await actions.move({ origin: selectIndicator }).click().perform();

  const options = await this.driver.findElements(
    By.css(`[class^=' css-'][class$='option']`),
  );

  actions = await this.driver.actions({ async: true });
  await actions.move({ origin: options[4] }).click().perform();
});

Then(
  "Displayed metrics count should match the selected metrics count",
  async function () {
    const menuList = await this.driver.findElement(
      By.css(`[class^=' css-'][class$='MenuList']`),
    );
    const selectedoptionsList = await menuList.findElements(
      By.css("input:checked[type='checkbox']"),
    );

    const metrics = await this.driver.findElements(
      By.css(`[data-test-id='metrics']`),
    );
    assert.strictEqual(metrics.length, selectedoptionsList.length);
  },
);

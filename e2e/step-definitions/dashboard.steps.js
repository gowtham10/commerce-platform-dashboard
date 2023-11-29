const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until } = require("selenium-webdriver");

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

When("The {card} card is clicked", async function (cardIndex) {
  const cards = await this.driver.findElements(By.css(`[data-test-id='card']`));
  const actions = await this.driver.actions({ async: true });
  await actions.move({ origin: cards[cardIndex] }).click().perform();
  await this.driver.sleep(1000);
  await this.driver.wait(until.elementLocated(By.css("[data-test-id='main']")));
});

Then(
  "The {card} click should redirect to the {path} page",
  async function (_, path) {
    const url = await this.driver.getCurrentUrl();
    const expectedUrl = `${this.appUrl}${path}`;
    assert.strictEqual(url, expectedUrl);
  },
);
